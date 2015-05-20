// Inventory Update
// Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery.
// Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.

function inventory(arr1, arr2) {
	var firstInv = arr1;
	var secondInv = arr2;

	arr1.forEach(function(curVal) {
		console.log('Currently examing: ' + curVal);
		arr2.some(function(newVal) {
			if (curVal[1] < newVal[1]) {
				//insert newVal after curVal
				console.log(curVal[1] + ' should come before ' + newVal[1]);
				return false
			} else if (curVal[1] === newVal[1]) {
				//add newVal quantity to curVal quantity
				console.log(curVal[1] + ' needs to add ' + newVal[0] + ' more');
				return true
			}
		});
		var updateIdx;
	});
}

// Example invetory lists
var curInv = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']];
var newInv = [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];

console.log(inventory(curInv, newInv));
