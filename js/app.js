//Page transitions
function vis(id, state){
  let el = document.getElementById(id);
  if(state === 0){
    el.className = 'invisible';
  } else {
    el.className = 'visible';
  }
}

function display(id, state){
  let el = document.getElementById(id);
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
    break;

    case 'searchpage':
      display('launchpage', 0);
      display('searchpage', 1);
      // refresh map
      google.maps.event.trigger(mapObj, 'resize');
      if(geo_enabled){
        setTimeout(function(){visByCheckbox();}, 100);
      } else {
        setTimeout(function(){zoomTo(['cityCenter']);}, 100);
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
  switch(e.target.id.toLowerCase()){
    case "nav-home":
      visPage('launchpage');
    break;

    case "nav-search":
      visPage('searchpage');
    break;
  }
});
