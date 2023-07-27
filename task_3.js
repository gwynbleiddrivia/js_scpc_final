////////
////Write a JavaScript program to find the most frequent element in an array and return it. 
//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
//////////////

function count_freq(given){
	let obj = {}
	//This map function builds the object such that the keys are the elements of the given array and the values are the frequencies of the respective elements
	given.map(digit=>{
		if(!(digit in obj)){
			obj[digit] = 1
		}
		else{
			obj[digit] += 1
		}
	})
	//This find function now finds out that single key which has the maximum value, in other words the element with the most frequency
	let res = Object.keys(obj).find(singlekey=>{
		return obj[singlekey] === Math.max(...Object.values(obj))
	})
	return res
	
	//Math.max(...Object.values(obj))
}

console.log(count_freq([3,5,2,5,3,1,4,5,7,7]))

