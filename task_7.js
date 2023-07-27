////////
////Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
////////

function roman_to_decimal(given){
	//This object contains the decimal value of roman numerics
	const obj = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
	
	let res = 0;
	let prev = 0;
		
	//The for loop starts from the end of the given roman numeric and checks if the current letter value is greater or equal than the previous letter value. If true, it is added to the result. If notm then it is subtscracted from the result
	for(let i=given.length-1; i>=0; i--){
		const curr = obj[given[i]]
		if (curr >= prev){
			res += curr	
		}
		else{
			res -= curr
		}

		prev = curr
	}
	return res
}


console.log(roman_to_decimal('XI'))

