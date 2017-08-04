//Table generation
document.getElementById("dropdown").addEventListener("change", getIndex);
document.getElementById("cb0").addEventListener("onchange", getIndex);
document.getElementById("cb1").addEventListener("onchange", getIndex);
document.getElementById("cb2").addEventListener("onchange", getIndex);
document.getElementById("cb3").addEventListener("onchange", getIndex);
document.getElementById("cb4").addEventListener("onchange", getIndex);

// table generation
function addInfo(currentRestaurant){

    var locationRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.innerText = currentRestaurant.title;
    locationRow.appendChild(nameCell);

    var addressCell = document.createElement("td");
    addressCell.innerText = currentRestaurant.address;
    locationRow.appendChild(addressCell);

    var websiteAddress = currentRestaurant.website.replace("http://", "").replace("www.", "");
    var websitePart = websiteAddress.split('/', 2);
    //console.log(websitePart[0]);

    var websiteCell = document.createElement("td");
    //websiteCell.innerHTML = "<a href=" +this.website +" target='_blank'>" + this.website.replace("http://", "") + "</a>";
    websiteCell.innerHTML = "<a href=" +currentRestaurant.website +" target='_blank'>" + websitePart[0] + "</a>";

    locationRow.appendChild(websiteCell);

    var table = document.getElementById("restaurantListTable");
    table.appendChild(locationRow);
};

function getIndex() {
		// clears table
		var tableContainer = document.getElementById("restaurantListTable");
		tableContainer.innerHTML = "";
	
    var selectDropDown = document.getElementById("dropdown");
		var userSelectTime = selectDropDown.options[selectDropDown.selectedIndex].text;
	
	// check if N is checked or not, if yes set the variable to "N"
	var NboxChecked = document.getElementById("cb0").checked;
	if (NboxChecked == true){
		var NboxTrue = "N";
	}
	// check if NE is checked or not, if yes set the variable to "NE"
	var NEboxChecked = document.getElementById("cb1").checked;
	if (NEboxChecked == true){
		var NEboxTrue = "NE";
	}		
	// check if NW is checked or not, if yes set the variable to "NW"
	var NWboxChecked = document.getElementById("cb2").checked;
	if (NWboxChecked == true){
		var NWboxTrue = "NW";
	}
	// check if SE is checked or not, if yes set the variable to "SE"
	var SEboxChecked = document.getElementById("cb3").checked;
	if (SEboxChecked == true){
		var SEboxTrue = "SE";
	}
	// check if SW is checked or not, if yes set the variable to "SW"
	var SWboxChecked = document.getElementById("cb4").checked;
	if (SWboxChecked == true){
		var SWboxTrue = "SW";
	}

	// if N is selected print out N restaurants
	for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == NboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
		}
	}
	// if NE is selected print out NE restaurants
	for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == NEboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
		}
	}
	// if NW is selected print out NW restaurants
	for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == NWboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
		}
	}
		// if SE is selected print out se restaurants
	for (var index = 0; index < brunchArr.length; index++) {
	        var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == SEboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
	
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
		}
	}
	// if SW is selected print out sw restaurants
	for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == SWboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
		}
	}	
}