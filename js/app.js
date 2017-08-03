//Page transitions
function vis(id, state){
    var el = document.getElementById(id);
    if(state === 0){
        el.className = 'invisible';
    } else {
        el.className = 'visible';
    }
}

function display(id, state){
    var el = document.getElementById(id);
    if(state === 0){
        el.className = 'none';
    } else {
        el.className = 'block';
    }
}

// show a page by name
// hide other 2
function visPage(pageId){
    switch(pageId){
        case 'launchpage':
            display('launchpage', 1);
            display('searchpage', 0);
            display('reviews', 0);
        break;

        case 'searchpage':
            display('launchpage', 0);
            display('searchpage', 1);
            display('reviews', 0);
            // refresh map
            google.maps.event.trigger(mapObj, 'resize');
            if(geo_enabled){
                setTimeout(function(){visByCheckbox();}, 100);
            } else {
                setTimeout(function(){zoomTo(['cityCenter']);}, 100);
            }
        break;

        case 'reviews':
            display('launchpage', 0);
            display('searchpage', 0);
            display('reviews', 1);
            reviewOutput();
            // unhide reviews if they exist
            if(document.getElementById('review-content').innerHTML){
                display('review-content', 1);
            } else {
                display('review-content', 0);
            }
        break;
    }
    if(pageId === 'launchpage'){
        vis('container_btns_secondary', 1);
    } else {
        vis('container_btns_secondary', 0);
    }
}

// add nav event system
document.getElementById('nav_main').addEventListener('click', function(e){
    // log(e.target.id);
    switch(e.target.id.toLowerCase()){
        case "site-title":
            visPage('launchpage');
        break;

        case "nav-search":
            visPage('searchpage');
        break;

        case "nav-review":
            visPage('reviews');
        break;
    }
});
