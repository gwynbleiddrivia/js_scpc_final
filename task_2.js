/////////////
////Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
///Example Input: [2, -5, 10, -3, 7] Example Output: 19
/////////////////


function pos_sum(given){
	let sum = 0
	//This map function just sums up the element of the array if they are positive
	given.map(digit=>{
		if(digit>=0){
			sum+=digit
		}
	})
	return sum
}

console.log(pos_sum([2,-5,10,-3,7]))
console.log(pos_sum([-2,5,-10,13,7]))
