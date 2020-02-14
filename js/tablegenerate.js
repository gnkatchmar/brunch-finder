//Table generation
document.getElementById("dropdown").addEventListener("change", getIndex);
document.getElementById("cboxes").addEventListener("change", getIndex);

function addInfo(currentRestaurant){

    let locationRow = document.createElement("tr");
    let nameCell = document.createElement("td");
    nameCell.innerText = currentRestaurant.title;
    locationRow.appendChild(nameCell);

    let addressCell = document.createElement("td");
    addressCell.innerText = currentRestaurant.address;
    locationRow.appendChild(addressCell);

    let websiteAddress = currentRestaurant.website.replace("http://", "").replace("www.", "");
    let websitePart = websiteAddress.split('/', 2);

    let websiteCell = document.createElement("td");
    //websiteCell.innerHTML = "<a href=" +this.website +" target='_blank'>" + this.website.replace("http://", "") + "</a>";
    websiteCell.innerHTML = "<a href=" +currentRestaurant.website +" target='_blank'>" + websitePart[0] + "</a>";

    locationRow.appendChild(websiteCell);

    let table = document.getElementById("restaurantListTable");
    table.appendChild(locationRow);};

function getIndex() {

		// clears table
		let tableContainer = document.getElementById("restaurantListTable");
		tableContainer.innerHTML = "";
	
    let selectDropDown = document.getElementById("dropdown");
		let userSelectTime = selectDropDown.options[selectDropDown.selectedIndex].text;
	
		// check if x is checked or not, if yes set the letiable to "x"
		let NboxChecked = document.getElementById("cb0").checked;
		if (NboxChecked == true){
			let NboxTrue = "N";
		}

		let NEboxChecked = document.getElementById("cb1").checked;
		if (NEboxChecked == true){
			let NEboxTrue = "NE";
		}		

		let NWboxChecked = document.getElementById("cb2").checked;
		if (NWboxChecked == true){
			let NWboxTrue = "NW";
		}

		let SEboxChecked = document.getElementById("cb3").checked;
		if (SEboxChecked == true){
			let SEboxTrue = "SE";
		}

		let SWboxChecked = document.getElementById("cb4").checked;
		if (SWboxChecked == true){
			let SWboxTrue = "SW";
		}

		let EboxChecked = document.getElementById("cb5").checked;
		if (EboxChecked == true){
			let EboxTrue = "E";
		}

		let WboxChecked = document.getElementById("cb6").checked;
		if (WboxChecked == true){
			let WboxTrue = "W";
		}

		let SboxChecked = document.getElementById("cb7").checked;
		if (SboxChecked == true){
			let SboxTrue = "S";
		}

		let VboxChecked = document.getElementById("cb8").checked;
		if (VboxChecked == true){
			let VboxTrue = "V";
		}

		let H30boxChecked = document.getElementById("cb9").checked;
		if (H30boxChecked == true){
			let H30boxTrue = "H30";
		}
	
		let GboxChecked = document.getElementById("cb10").checked;
		if (GboxChecked == true){
			let GboxTrue = "G";
		}

		// if x is selected print out x restaurants
		for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === NboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}

		for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === NEboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}

		for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === NWboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
	
		for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === SEboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}

		for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === SWboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}

		for (let index = 0; index < brunchArr.length; index++) {
			let brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd === EboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			let currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}

		for (let index = 0; index < brunchArr.length; index++) {
			let brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd === WboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			let currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}

		for (let index = 0; index < brunchArr.length; index++) {
			let brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd === SboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			let currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}	

		for (let index = 0; index < brunchArr.length; index++) {
			let brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd === VboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			let currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}
	
		for (let index = 0; index < brunchArr.length; index++) {
			let brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd === H30boxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			let currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}

		for (let index = 0; index < brunchArr.length; index++) {
			let brunchArrTime = brunchArr[index].opentime;
			if (brunchArr[index].nhd === GboxTrue && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
			let currentRestaurant = brunchArr[index];
			addInfo(currentRestaurant);
			}
		}			
}