// Inventory Update
// Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery.
// Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.

function inventory(arr1, arr2) {
	function updateExist(oldInv, newInv) {

	}
	function addNew(oldInv, newItem) {
		var returnArr = [];
		oldInv.forEach(function(val, idx) {
			if(val[1] > newItem[1]) {
				returnArr.push(newItem);
			}
			returnArr.push(val);
		});
		return returnArr;
	}
	console.log(addNew(arr1, arr2[1]));
	return arr1;
}

// Example invetory lists
var curInv = [
	[21, 'Bowling Ball'],
	[2, 'Dirty Sock'],
	[1, 'Hair Pin'],
	[5, 'Microphone']
];

var newInv = [
	[2, 'Hair Pin'],
	[3, 'Half-Eaten Apple'],
	[67, 'Bowling Ball'],
	[7, 'Toothpaste']
];

console.log(inventory(curInv, newInv));
