/////
//Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
//Example Input: "hello world" Example Output: "dlrow olleh"
////////////

function rev_string(given){
	let rev_given = ""
	const len = given.length
	//This for loop concatenates rev_given from the last element of the given array, in this way a reverse string is produced
	for(let i=len-1;i>=0;i--){
		rev_given+=given[i]
	}
	return rev_given
}

console.log(rev_string("mango"))
console.log(rev_string("hello world"))






