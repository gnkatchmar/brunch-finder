// GEOLOCATION API
let x = document.getElementById('currentPosition');
let pos;
let userQuad = null;
let mapObj;
let checkboxes_geo;
let brunchMarkerObjs;
let markerArr_N = [];
let markerArr_NE = [];
let markerArr_SE = [];
let markerArr_SW = [];
let markerArr_NW = [];
let markerArr_E = [];
let markerArr_W = [];
let markerArr_S = [];
let markerArr_V = [];
let markerArr_H30 = [];
let markerArr_G = [];
let markerArr_NC = [];
let selectedTime;
let infoWindow;

//"higher" negative lng value means center more to the left
let mapOptions = {
  cityCenter: {
    coords: {lat: 45.68, lng: -122.6},
    zoom: 8
  },
  N: {
    coords: {lat: 45.575, lng: -122.7},
    zoom: 11
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
    zoom: 9
  },
  S: {
    coords: {lat: 45.38, lng: -122.7},
    zoom: 10
  },
  V: {
    coords: {lat: 45.68, lng: -122.6},
    zoom: 10
  },
  H30: {
    coords: {lat: 45.74, lng: -123.0},
    zoom: 10
  },
  G: {
    coords: {lat: 45.70, lng: -121.8},
    zoom: 10
  },
  NC: {
    coords: {lat: 45.68, lng: -123.6},
    zoom: 8
  },
};

// Event listener for form elements
window.addEventListener('load', function(){
  initPhotos();
  let formEl_nhood = document.forms.nhoodselect;
  document.getElementById('timeandlocation').addEventListener('change', function(e){

    // when checkboxes are changed,
    // show/hide corresponding markers
    if(e.target.tagName === 'INPUT'){
      let val = e.target.value;
      let selectedCoords = [];
      let selectedQuads = [];

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
  let checkedQuads = [];

  for(let i=0; i<checkboxes_geo.length; i++){
    let quad = checkboxes_geo[i].dataset.quad;

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
  let options;
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
  for(let i=0; i<checkboxes_geo.length; i++){
    checkboxes_geo[i].checked = false;
  }
}

function enable_geoloc(){
  if(navigator.geolocation){
    geo_enabled = true;
    navigator.geolocation.getCurrentPosition(function(position){

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
      for(let i=0; i<checkboxes_geo.length; i++){

        if(checkboxes_geo[i].dataset.quad === userQuad){
          checkboxes_geo[i].checked = true;

          // show relevant quad
          setMapOnAll('show', getMarkerObjs(userQuad));
        } else {
          checkboxes_geo[i].checked = false;

          // hide other quads
          let quad = checkboxes_geo[i].dataset.quad;
          setMapOnAll('hide', getMarkerObjs(quad));
        }
      }

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
  let ns = "S";
  let ew = "W";
  let concat;

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
  let quadMarkerArr;
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
    case 'H30':
      quadMarkerArr = markerArr_H30;
    break;
    case 'G':
      quadMarkerArr = markerArr_G;
    break;
    case 'NC':
      quadMarkerArr = markerArr_NC;
    break;
  }
  return quadMarkerArr;
}

function convertAllToMarkers(){
  // converts all brunchtrackers to marker objects

  let arr = [];
  let targetQuadArr = [];
  let infowindow = new google.maps.InfoWindow();

  for(let i=0; i<brunchArr.length; i++){
    let markerObj = new google.maps.Marker({//user marker
      position: {lat: brunchArr[i].lat, lng: brunchArr[i].lng},
      map: mapObj,
      optimized: false,
      openTime: brunchArr[i].opentime,
      title: brunchArr[i].title + '\n' + brunchArr[i].address + '\n' + brunchArr[i].opentime
    });

    google.maps.event.addListener(markerObj, 'click', (function(markerObj, i) {
      return function() {
        infowindow.setContent(
          '<b>' + brunchArr[i].title + '</b>'+
          '<p>Opens at ' + brunchArr[i].opentime + '</p>' + 
          '<p>'+ brunchArr[i].address + '</p>' +
          '<p><a href="' + brunchArr[i].website + '">website</a></p>')
        infowindow.open(map, markerObj);
      }
    })(markerObj, i));
    
    markerObj.setIcon('https://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    markerObj.setAnimation(google.maps.Animation.DROP);

    // this array is returned
    arr.push(markerObj);

    // incidentally add marker objects to correct quad arrays
    // get each brunchtracker quad
    let quad = brunchArr[i].nhd;

    // push corresponding marker object to correct quad array
    targetQuadArr = getMarkerObjs(quad);
    targetQuadArr.push(markerObj);
  }
  return arr;
}

// Sets the map on all markers in the array.
function setMapOnAll(vis, markerArr){
  for(let i=0; i < markerArr.length; i++) {
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