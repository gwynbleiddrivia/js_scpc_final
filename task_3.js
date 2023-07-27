////////
////Write a JavaScript program to find the most frequent element in an array and return it. 
//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
//////////////

function count_freq(given){
	let obj = {}
	given.map(digit=>{
		if(!(digit in obj)){
			obj[digit] = 1
		}
		else{
			obj[digit] += 1
		}
	})
	
	let res = Object.keys(obj).find(singlekey=>{
		return obj[singlekey] === Math.max(...Object.values(obj))
	})
	return res
	
	//Math.max(...Object.values(obj))
}

console.log(count_freq([3,5,2,5,3,1,4,5,7,7]))

