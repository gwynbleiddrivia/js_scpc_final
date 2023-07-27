///////
///Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
// Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
////////////////

function sum_comp(given, target){
	let left = 0;
	let right = given.length - 1

	//while loop will continue till left is less than right. If the sum is target, it immediaitely returns the index of those two values. If sum is greater than target, the right slides one element to left and if the sum is less than target, the left slides one element to the right. If no index is found in this way, the function returns an empty array []
	while(left<right){
		let sum = given[left] + given[right]
		if(sum === target){
			return [left, right]
			}
		else if(sum > target){
			right--
		}
		else if(sum < target){
			left++
		}
		}
	return []

}

console.log(sum_comp([1,3,4,8,11,15],9))
console.log(sum_comp([11,13,14,18,11,15],9))
