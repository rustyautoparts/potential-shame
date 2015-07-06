// Cash Register
//
// Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.
// cid is a 2d array listing available currency.
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
// Otherwise, return change in coin and bills, sorted in highest to lowest order.

function drawer(price, cash, cid) {
	//Avoids floating point inaccuracies by converting to cents
	price = convert100(price);
	cash = convert100(cash);
	cid = cid.map(function(val) {
		return [val[0], convert100(val[1])];
	});
	var denom = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
	var change = cash - price;
	//Calculates total cash in drawer
	var cidTotal = cid.reduce(function(a, b) {
		return a + b[1];
	}, 0);
	if (change > cidTotal) {
		return "Insufficient Funds";
	} else if (change === cidTotal) {
		return "Closed";
	} else {
		var returned = [];
		for (var i = cid.length - 1; i >= 0; i--) {
			if (denom[i] < change) {
				console.log('Change is payable from ' + cid[i][0]);
				var thisDenom = [cid[i][0], 0];
				while (change - denom[i] >= 0 && cid[i][1] > 0) {
					console.log('Change: ' + change)
					console.log('Cash: ' + cid[i][1]);
					cid[i][1] -= denom[i];
					change -= denom[i];
					thisDenom[1] += denom[i];
				}
				console.log('final change: ' + change);
				thisDenom[1] = convertToDec(thisDenom[1]);
				returned.push(thisDenom);
			}
		}
		return returned;
	}
}
function convert100(total) {
	var total100 = total * 100;
	return Math.round(total100);
}
function convertToDec(total) {
	var totalDec = total / 100;
	//return totalDec.toPrecision(2);
	return totalDec;
}

console.log(drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]));
