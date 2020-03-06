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
	table.appendChild(locationRow);
};

function getIndex() {

	// clear any existing table to begin
	let tableContainer = document.getElementById("restaurantListTable");
	tableContainer.innerHTML = "";

	let selectDropDown = document.getElementById("dropdown");
	let userSelectTime = selectDropDown.options[selectDropDown.selectedIndex].text;		

	// cycle through neighborhood checkboxes; print if checked
	for (index = 0; index < nhds.length; index++) { 
		if (document.getElementById("cb" + index).checked == true) {
			for (let x = 0; x < brunchArr.length; x++) {
				let brunchArrTime = brunchArr[x].opentime;
				if (brunchArr[x].nhd === nhds[index] && parseInt(userSelectTime.replace(":", "")) >= parseInt(brunchArrTime.replace(":", ""))) {
					let currentRestaurant = brunchArr[x];
					addInfo(currentRestaurant);
				}
			}
		}
	} 
}