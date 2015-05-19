// Inventory Update
// Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery.
// Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.

function inventory(arr1, arr2) {
	var updated = updateExist(arr1, arr2);
	var newItems = nonExistIn(arr1, arr2);
	newItems.forEach(function(val) {
		updated = addNew(updated, val);
	});
	function updateExist(oldInv, newInv) {
		var updatedItems = oldInv.map(function(oldItem) {
			var updateIdx = existsIn(newInv, oldItem);
			if (updateIdx >= 0) {
				var stock = newInv[updateIdx][0] + oldItem[0];
				return [stock, oldItem[1]];
			} else {
			       return oldItem;
			}	       
		});
		return updatedItems;
	}
	function nonExistIn(oldInv, newInv) {
		var newList = [];
		newInv.forEach(function(item) {
			if (existsIn(oldInv, item) === -1) {
				newList.push(item);
			}
		});
		return newList;
	}
	function existsIn(inv, item) {
		var idx = 0;
		var exists = inv.some(function(invItem, invIdx) {
			idx = invIdx;
			return invItem[1] === item[1];
		});
		if (exists) {
			return idx;
		}
		return -1;
	}
	function addNew(oldInv, newItem) {
		var returnArr = oldInv;
		returnArr.push(newItem);
		var mapper = returnArr.map(function(val, idx) {
			return {order: idx, value: val[1]};
		});
		var sorted = mapper.sort(function(a, b) {
			return a.value > b.value;
		});
		return sorted.map(function(item) {
			return returnArr[item.order];
		});
	}
	return updated;
}

// Example invetory lists
var curInv = [[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']];
var newInv = [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']];

console.log(inventory(curInv, newInv));
