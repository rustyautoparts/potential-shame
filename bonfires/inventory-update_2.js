// Inventory Update
// Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery.
// Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.

function inventory(arr1, arr2) {
	var firstInv = arr1;
	var secondInv = arr2;

	arr1.forEach(function(val) {
		var updateIdx;
		var update = secondInv.some(function(secVal, secIdx) {
			updateIdx = secIdx;
			return secVal[1] === val[1];
		});

	});
}

// Example invetory lists
var curInv = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']];
var newInv = [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];

console.log(inventory(curInv, newInv));
