// GEOLOCATION API
var x = document.getElementById('currentPosition');
var pos;
var userQuad = null;
var mapObj;
var checkboxes_geo;
var brunchMarkerObjs;
var markerArr_N = [];
var markerArr_NE = [];
var markerArr_SE = [];
var markerArr_SW = [];
var markerArr_NW = [];
var markerArr_E = [];
var markerArr_W = [];
var markerArr_S = [];
var markerArr_V = [];
var selectedTime;
var infoWindow;
//"higher" negative lng value means center more to the left
var mapOptions = {
    cityCenter: {
        coords: {lat: 45.48, lng: -122.6},
        zoom: 9
    },
    N: {
        coords: {lat: 45.575, lng: -122.7},
        zoom: 12
    },
    NE: {
        coords: {lat: 45.55, lng: -122.62},
        zoom: 11
    },
    SE: {
        coords: {lat: 45.5, lng: -122.62},
        zoom: 12
    },
    SW: {
        coords: {lat: 45.5, lng: -122.679565},
        zoom: 12
    },
    NW: {
        coords: {lat: 45.53, lng: -122.7},
        zoom: 14
    },
    E: {
        coords: {lat: 45.45, lng: -122.3},
        zoom: 10
    },
    W: {
        coords: {lat: 45.48, lng: -122.8},
        zoom: 10
    },
    S: {
        coords: {lat: 45.4, lng: -122.7},
        zoom: 11
    },
    V: {
        coords: {lat: 45.65, lng: -122.6},
        zoom: 11
    }
};

// Utility function
var timerStart, timerEnd;
function timer(mode){
    if(mode === 'start' || mode === 'stop'){
        var now = Date.now();
        if(mode === 'start'){
            timerStart = now;
        } else {
            timerEnd = now;
        }
    } else {
        return (timerEnd - timerStart) / 1000 + "s";
    }
}

// Event listener for form elements
window.addEventListener('load', function(){
    initPhotos();
    var formEl_nhood = document.forms.nhoodselect;
    document.getElementById('timeandlocation').addEventListener('change', function(e){

        // when checkboxes are changed,
        // show/hide corresponding markers
        if(e.target.tagName === 'INPUT'){
            var val = e.target.value;
            var selectedCoords = [];
            var selectedQuads = [];

            visByCheckbox();

        // when select is changed
        // only show markers with opentime less than or equal to select value
        } else if(e.target.tagName === 'SELECT'){
            selectedTime = parseInt(e.target.options[e.target.selectedIndex].text.replace(':', ''));
            visByCheckbox();
        }
    });

    document.getElementById('btn_nearBy').addEventListener('click', function(){
        enable_geoloc();
    });
    document.getElementById('btn_refresh').addEventListener('click', function(){
        setTimeout(function(){
            replaceClass('pic1', 'visible', 'invisible');
        }, 50);
        setTimeout(function(){
            replaceClass('pic2', 'visible', 'invisible');
        }, 100);
        setTimeout(function(){
            replaceClass('pic3', 'visible', 'invisible');
        }, 150);

        getPlacePhotos();
    });
});

function visByCheckbox(){
    checkboxes_geo = document.querySelectorAll('input[type=checkbox]');
    var checkedQuads = [];

    for(var i=0; i<checkboxes_geo.length; i++){
        var quad = checkboxes_geo[i].dataset.quad;

        //show/hide markers based on checked boxes
        if(checkboxes_geo[i].checked){
            setMapOnAll('show', getMarkerObjs(quad));
            checkedQuads.push(quad);
        } else {
            setMapOnAll('hide', getMarkerObjs(quad));
        }
    }
    zoomTo(checkedQuads);
}

function zoomTo(quadArr){
    var options;

    if(quadArr.length === 1){
        options = mapOptions[quadArr[0]];
    } else {
        options = mapOptions.cityCenter;
    }

    mapObj.panTo(options.coords);
    mapObj.setZoom(options.zoom);
}

function initMap() {
    infoWindow = new google.maps.InfoWindow({map: mapObj});
    mapObj = new google.maps.Map(document.getElementById('map'), {
        center: mapOptions.cityCenter.coords,//initializes at city center
        zoom: mapOptions.cityCenter.zoom,
        scrollwheel: true
    });

    // convert all brunchtrackers to marker objects
    brunchMarkerObjs = convertAllToMarkers();

    // get checkboxes, prepare for geolocating user
    checkboxes_geo = document.querySelectorAll('input[type=checkbox]');
    // clearCheckBoxes();
}

function clearCheckBoxes(){
    for(var i=0; i<checkboxes_geo.length; i++){
        checkboxes_geo[i].checked = false;
    }
}

function enable_geoloc(){
    if(navigator.geolocation){
        geo_enabled = true;
        navigator.geolocation.getCurrentPosition(function(position){

// timer('start');

        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);//center view on user location
        infoWindow.setContent('Location found.');
        mapObj.setCenter(pos);

        // get current user location quadrant
        userQuad = getQuadrant();

        // reload featured photos to show nearby options
        getPlacePhotos();

        // check box matching user's geolocation
        for(var i=0; i<checkboxes_geo.length; i++){

            if(checkboxes_geo[i].dataset.quad === userQuad){
                checkboxes_geo[i].checked = true;

                // show relevant quad
                setMapOnAll('show', getMarkerObjs(userQuad));
            } else {
                checkboxes_geo[i].checked = false;

                // hide other quads
                var quad = checkboxes_geo[i].dataset.quad;
                setMapOnAll('hide', getMarkerObjs(quad));
            }
        }

// timer('stop');

      }, function() {
        handleLocationError(false, infoWindow, mapObj.getCenter());
      });
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, mapObj.getCenter());
  } else {
      alert("Your browser doesn't seem to support geolocation. Bummer.");
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos){
   infoWindow.setPosition(pos);
   infoWindow.setContent(browserHasGeolocation ?
       'Error: The Geolocation service failed.' :
       'Error: Your browser doesn\'t support geolocation.');
}
// GEOLOCATION API

// Determine cutoff lat, lng between city quadrants (NW, NE, SE, SW)
    // Treating center of Burnside bridge as axis // This will need refining!
    // lat: 45.523063, lng: -122.667677
    // Anything > lat = N
    // Anything > lng = E
    //I-205 = lng: -122.565664
function getQuadrant(){
    var ns = "S";
    var ew = "W";
    var concat;

    if(pos.lat > 45.523063){
        ns = "N";
    }
    if(pos.lng > -122.667677){
        ew = "E";
    }
    concat = ns + ew;

    if(pos.lng > -122.565664){
        concat = "E";
    }
    if(pos.lng < -122.8){
        concat = "W";
    }
    if(pos.lat < 45.1){
        concat = "S";
    }
    if(pos.lat > 45.65){
        concat = "V";
    }
    return concat;
}

function getMarkerObjs(quad){
    var quadMarkerArr;
    switch(quad){
        case 'N':
            quadMarkerArr = markerArr_N;
        break;
        case 'NE':
            quadMarkerArr = markerArr_NE;
        break;
        case 'NW':
            quadMarkerArr = markerArr_NW;
        break;
        case 'SE':
            quadMarkerArr = markerArr_SE;
        break;
        case 'SW':
            quadMarkerArr = markerArr_SW;
        break;
        case 'E':
            quadMarkerArr = markerArr_E;
        break;
        case 'W':
            quadMarkerArr = markerArr_W;
        break;
        case 'S':
        quadMarkerArr = markerArr_S;
        break;
        case 'V':
        quadMarkerArr = markerArr_V;
        break;
    }
    return quadMarkerArr;
}

function convertAllToMarkers(){
    // converts all brunchtrackers to marker objects
    // also fills global quad arrays: markerArr_NE, markerArr_SE, markerArr_SW,

    var arr = [];
    var targetQuadArr;

    for(var i=0; i<brunchArr.length; i++){
        var markerObj = new google.maps.Marker({//user marker
            position: {lat: brunchArr[i].lat, lng: brunchArr[i].lng},
            map: mapObj,
            optimized: false,
            title: brunchArr[i].title,
            openTime: brunchArr[i].opentime
        });
        markerObj.setIcon('https://maps.google.com/mapfiles/ms/icons/blue-dot.png');
        markerObj.setAnimation(google.maps.Animation.DROP);
        // this array is returned
        arr.push(markerObj);

        // incidentally add marker objects to correct quad arrays
        // get each brunchtracker quad
        var quad = brunchArr[i].nhd;

        // push corresponding marker object to correct quad array
        targetQuadArr = getMarkerObjs(quad);
        targetQuadArr.push(markerObj);
    }
    return arr;
}

// Sets the map on all markers in the array.
 function setMapOnAll(vis, markerArr){
   for(var i=0; i < markerArr.length; i++) {
       if(vis === 'show'){
           if(selectedTime){
               if(parseInt(markerArr[i].openTime.replace(':', '')) <= selectedTime){
                   markerArr[i].setMap(mapObj);
               } else {
                   markerArr[i].setMap(null);
               }
           } else {
               markerArr[i].setMap(mapObj);
           }
       } else {
           markerArr[i].setMap(null);
       }
   }
 }