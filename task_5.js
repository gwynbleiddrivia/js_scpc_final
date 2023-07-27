////////
///Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation
////////
function calcul(x,y,operator){
	if(operator === '+'){
		return x + y
	}
	else if(operator === '-'){
		return x - y
	}
	else if(operator === "*"){
		return x * y
	}
	else if(operator === "/"){
		return x/y
	}
	else{
		return "Insert valid operator"
	}
}

console.log(calcul(3,4,'*'))
