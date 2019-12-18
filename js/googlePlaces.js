var service;
var geo_enabled = false;
var active_BrunchArr;
var brunchArr_Geo = [];
var imgsFilled = 0;
var photosObj = {
    global_pId: null,
    indx : null,
    // defining dimensions of images [sm] [md] [lg] [xl]
    photoSizes: [100, 300, 500, 800],//sizes: sm, md, lg, xl
};

// Utility function
function resetPhotosObj(){
    photosObj.global_pId = null;
    photosObj.photoUrlArrs = [[],[],[],[]];
}

// Utility function
// Returns a tracker object by Google placeId
function getTrackerObj(pId){
    for(var i=0; i<brunchArr.length; i++){
        if(brunchArr[i].pId === pId){
            photosObj.indx = i;
            return brunchArr[i];
        }
    }
}

// Utility function
function getRandom(bounds){
    var rand = Math.floor(Math.random() * bounds);
    return rand;
}

// Get subset of brunch array that match quadrant
function getBrunchObjs(quad){
    var subsetArr = [];
    for(var i=0; i<brunchArr.length; i++){
        if(brunchArr[i].nhd === quad){
            subsetArr.push(brunchArr[i]);
        }
    }
    return subsetArr;
}

function initPhotos(){
    getPlacePhotos();
}

// Fill photoUrls arrays with images of brunchtracker with this pId
function getPlacePhotos(){
    if(!geo_enabled){
        active_BrunchArr = brunchArr;
        // indx = getRandom(brunchArr.length);
    } else {// geolocation enabled
        // get subset of brunchArr, put to brunchArr_Geo
        brunchArr_Geo = getBrunchObjs(userQuad);
        active_BrunchArr = brunchArr_Geo;
    }
    var indx = getRandom(active_BrunchArr.length);
    var placeObj = active_BrunchArr[indx];
    
    photosObj.global_pId = placeObj.pId;
    photosObj.indx = indx;

    var request = {
        placeId: placeObj.pId
    };

    if(!service){
        service = new google.maps.places.PlacesService(mapObj);
    }
    service.getDetails(request, callback);
}

// Fill the photUrls arrays
function callback(place, status){
    if (status == google.maps.places.PlacesServiceStatus.OK){
        var photos = place.photos;
        var url;
        var urlMasterArr = [];

        // for each photo size defined above
        var photoSizes = photosObj.photoSizes;

        // for each img size in global, grab 1 image
        // push that to an array
        // put all those in a single array and attach to brunch object as img prop
        for(var j=0; j<photoSizes.length; j++){
            var size = photoSizes[j];
            var sizedArr = [];
            var maxPics = 5;

            for(var i=0; i<maxPics; i++){//limt to 2 images
                if(photos[i]){
                    url = photos[i].getUrl({'maxWidth':size, 'maxHeight':size});
                }
                sizedArr.push(url);
            }
            urlMasterArr.push(sizedArr);
        }
        // attach imgs property to brunch object
        active_BrunchArr[photosObj.indx].imgs = urlMasterArr;

        // // draw photos on page1
        drawPhotos(active_BrunchArr[photosObj.indx], 'md', 1);
        imgsFilled++;

        if(imgsFilled < 3){
            getPlacePhotos();
        } else {
            imgsFilled = 0;
        }
    }
}

function drawPhotos(brunchObj, size, quantity){
    var activePhotoUrlArr;

    var indx = photosObj.indx;
    var website = active_BrunchArr[indx].website;
    var title = active_BrunchArr[indx].title;
    var opentime = active_BrunchArr[indx].opentime;
    var address = active_BrunchArr[indx].address;
    var photoUrl;
    if(active_BrunchArr[indx].imgs[1].length > 0){
        photoUrl = active_BrunchArr[indx].imgs[1][getRandom(active_BrunchArr[indx].imgs[1].length)];
    } else {
        photoUrl = active_BrunchArr[getRandom(active_brunchArr.length)].imgs[1][getRandom(active_BrunchArr[indx].imgs[1].length)];
    }
    var n = imgsFilled+1;
    var target = 'pic' + n;
    var container = 'container_img' + imgsFilled;

    document.getElementById(target).innerHTML = "<figure id='" + container + "' class='invisible'><img src='" + photoUrl + "'></figure><figcaption><div class='f-title'>" + brunchObj.title + "</div><div class='f-time'>" + brunchObj.address + "<br>Opens: " + brunchObj.opentime + "</div><div><a href='" + brunchObj.website + "' class='f-site' target='blank'>website</div></figcaption>";

    setTimeout(function(){
        replaceClass(target, 'invisible', 'visible');
    }, 500);

    setTimeout(function(){
        replaceClass(container, 'invisible', 'visible');
    }, 800);
}

// utility functions
function addClass(id, newClass){
    var el = document.getElementById(id);
    var currentClass = el.className;
    document.getElementById(id).className = currentClass + " " + newClass;
}

function removeClass(id, remClass){
    var el = document.getElementById(id);
    var currentClass = el.className;
    document.getElementById(id).className = currentClass.replace(currentClass, remClass).trim();
}

function replaceClass(id, oldClass, newClass){
    var el = document.getElementById(id);
    var currentClass = el.className;
    document.getElementById(id).className = currentClass.replace(oldClass, newClass).trim();
}

document.getElementById('pic1').addEventListener('click', function(e){
    visPage('searchpage');
});