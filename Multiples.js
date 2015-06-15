/* 	
	This is the first problem on https://projecteuler.net.problem=1
	The program is supposed to find the solution to this problem:
	"If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
	Find the sum of all the multiples of 3 or 5 below 1000."
	Multiples of 3 and 5
*/

var multiples = function() {
	var total = 0;

	for (var v = 0; v < 1000; v++)
	{
		if (v % 3 == 0 || v % 5 == 0)
		{
			total += v;
		}
	}

	document.getElementById('multiples_result').innerHTML = total;
}