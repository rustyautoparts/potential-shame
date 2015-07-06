//Sum All Primes
//Sum all the ptime numbers up to and including the provided number.
//A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
//The provided number may not be a prime.

function sumPrimes(num) {
	var sum = 0;
	for (var i = num; i > 1; i--) {
		if (isPrime(i)) {
			sum += i;
		}
	}
	return sum;
}
function isPrime(num) {
	for (var i = num - 1; i > 1; i--) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

sumPrimes(10);
// -> 17
