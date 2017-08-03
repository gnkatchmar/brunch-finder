//Table generation
document.getElementById("dropdown").addEventListener("change", getIndex);
document.getElementById("cb0").addEventListener("onchange", getIndex);
document.getElementById("cb0").addEventListener("onchange", getIndex);
document.getElementById("cb0").addEventListener("onchange", getIndex);

// table generation
function addInfo(currentRestaurant){

    var locationRow = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.innerText = currentRestaurant.title;
    locationRow.appendChild(nameCell);

    //var opentimeCell = document.createElement("td");
    //opentimeCell.innerText = this.opentime;
    //locationRow.appendChild(opentimeCell);

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
	
	// check if SE is checked or not, if yes set the variable to "SE"
	var SEboxChecked = document.getElementById("cb0").checked;
	if (SEboxChecked == true){
		var SEboxTrue = "SE";
	}
	// check if NE is checked or not, if yes set the variable to "NE"
	var NEboxChecked = document.getElementById("cb1").checked;
	if (NEboxChecked == true){
		var NEboxTrue = "NE";
	}		
	// check if SW is checked or not, if yes set the variable to "SW"
	var SWboxChecked = document.getElementById("cb2").checked;
	if (SWboxChecked == true){
		var SWboxTrue = "SW";
	}
	// if SE is selected print out se restaurants
	for (var index = 0; index < brunchArr.length; index++) {
	        var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == SEboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
	
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
		}
	}
	// if NE is selected print out ne restaurants
	for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == NEboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
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