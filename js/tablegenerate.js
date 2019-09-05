//Table generation
document.getElementById("dropdown").addEventListener("change", getIndex);
document.getElementById("cb0").addEventListener("onchange", getIndex);
document.getElementById("cb1").addEventListener("onchange", getIndex);
document.getElementById("cb2").addEventListener("onchange", getIndex);
document.getElementById("cb3").addEventListener("onchange", getIndex);
document.getElementById("cb4").addEventListener("onchange", getIndex);
document.getElementById("cb5").addEventListener("onchange", getIndex);
document.getElementById("cb6").addEventListener("onchange", getIndex);
document.getElementById("cb7").addEventListener("onchange", getIndex);
document.getElementById("cb8").addEventListener("onchange", getIndex);
document.getElementById("cb9").addEventListener("onchange", getIndex);
document.getElementById("cb10").addEventListener("onchange", getIndex);

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

    var websiteCell = document.createElement("td");
    //websiteCell.innerHTML = "<a href=" +this.website +" target='_blank'>" + this.website.replace("http://", "") + "</a>";
    websiteCell.innerHTML = "<a href=" +currentRestaurant.website +" target='_blank'>" + websitePart[0] + "</a>";

    locationRow.appendChild(websiteCell);

    var table = document.getElementById("restaurantListTable");
    table.appendChild(locationRow);};

function getIndex() {

		// clears table
		var tableContainer = document.getElementById("restaurantListTable");
		tableContainer.innerHTML = "";
	
    var selectDropDown = document.getElementById("dropdown");
		var userSelectTime = selectDropDown.options[selectDropDown.selectedIndex].text;
	
		// check if x is checked or not, if yes set the variable to "x"
		var NboxChecked = document.getElementById("cb0").checked;
		if (NboxChecked == true){
			var NboxTrue = "N";
		}

		var NEboxChecked = document.getElementById("cb1").checked;
		if (NEboxChecked == true){
			var NEboxTrue = "NE";
		}		

		var NWboxChecked = document.getElementById("cb2").checked;
		if (NWboxChecked == true){
			var NWboxTrue = "NW";
		}

		var SEboxChecked = document.getElementById("cb3").checked;
		if (SEboxChecked == true){
			var SEboxTrue = "SE";
		}

		var SWboxChecked = document.getElementById("cb4").checked;
		if (SWboxChecked == true){
			var SWboxTrue = "SW";
		}

		var EboxChecked = document.getElementById("cb5").checked;
		if (EboxChecked == true){
			var EboxTrue = "E";
		}
"
		var WboxChecked = document.getElementById("cb6").checked;
		if (WboxChecked == true){
			var WboxTrue = "W";
		}

		var SboxChecked = document.getElementById("cb7").checked;
		if (SboxChecked == true){
			var SboxTrue = "S";
		}

		var VboxChecked = document.getElementById("cb8").checked;
		if (VboxChecked == true){
			var VboxTrue = "V";
		}

		var H30boxChecked = document.getElementById("cb9").checked;
		if (H30boxChecked == true){
			var VboxTrue = "H30";
		}
	
		var GboxChecked = document.getElementById("cb10").checked;
		if (GboxChecked == true){
			var VboxTrue = "G";
		}							

		// if x is selected print out x restaurants
		for (var index = 0; index < brunchArr.length; index++) {
				var brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd == NboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				var currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}

		for (var index = 0; index < brunchArr.length; index++) {
				var brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd == NEboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				var currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}

		for (var index = 0; index < brunchArr.length; index++) {
				var brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd == NWboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				var currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
	
		for (var index = 0; index < brunchArr.length; index++) {
				var brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd == SEboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				var currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}

		for (var index = 0; index < brunchArr.length; index++) {
				var brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd == SWboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				var currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}

		for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == EboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}

		for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == WboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}

		for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd == SboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}	

		for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd = VboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}
	
		for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd = H30boxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}

		for (var index = 0; index < brunchArr.length; index++) {
			var brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd = GboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			var currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}			
}