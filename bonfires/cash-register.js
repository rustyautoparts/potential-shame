// Cash Register
//
// Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.
// cid is a 2d array listing available currency.
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
// Otherwise, return change in coin and bills, sorted in highest to lowest order.

function drawer(price, cash, cid) {
	var change = cash - price;
	var cidTotal = 0;
	for (var i = 0; i < cid.length; i++) {
		console.log(parseFloat(cid[i][1]));
		cidTotal += parseFloat(cid[i][1]);
		console.log(cidTotal);
	}
	if (change > cidTotal) {
		return "Insufficient Funds"
	} else if (change === cidTotal) {
		return "Closed"
	} else {
		return change;
	}
	console.log(cidTotal);
}

console.log(drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]));
