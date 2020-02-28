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

		// if x is selected print out x restaurants
		if (document.getElementById("cb0").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "N" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb1").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "NE" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb2").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "NW" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb3").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "SE" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb4").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "SW" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb5").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "E" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb6").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "W" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb7").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "S" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb8").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "V" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb9").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "H30" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb10").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "G" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

		if (document.getElementById("cb11").checked == true){
			for (let index = 0; index < brunchArr.length; index++) {
				let brunchArrTime = brunchArr[index].opentime;
				if (brunchArr[index].nhd === "NC" && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
				let currentRestaurant = brunchArr[index];
				addInfo(currentRestaurant);
			}
		}
		}

}