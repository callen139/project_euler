/* 	
	This is the third problem on https://projecteuler.net.problem=3
	The program is supposed to find the solution to this problem:
	"The prime factors of 13195 are 5, 7, 13 and 29.
	What is the largest prime factor of the number 600851475143?"
	Largest Prime factor of 600851475143
*/

var primeFactor = function() {
	var answer = 0;
	var num = 600851475143;
	var factor = 2;

	while ( num > factor)
	{
		if (num % factor == 0)
		{
			num = num/factor;
			factor = 2;
		}
		else 
		{
			factor += 1;
		}
	}
	answer = factor;
	
	document.getElementById('primeFactor_result').innerHTML = answer;
}