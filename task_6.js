////////
///Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
////

function rand_pass(length){
	let temp = ""
	//raw string here contains all uppercase, lower case, numbers and special symbols
	let raw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?"

	//the for loop here concatenates randomly chosen element from raw string to the temp string until the length mathes to the given length
	for(i=0;i<length;i++){
		let rand_index = Math.floor(Math.random()*raw.length)
		temp += raw[rand_index]
	}

	return temp
}

console.log(rand_pass(6))
