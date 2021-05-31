class AdvancedArithmetic {
    divisorSum(n) {
		throw "NotImplementedError";
	}
}

class Calculator extends AdvancedArithmetic{
	divisorSum(n){
        let suma = 0;
        for(let i = 1; i <= n; i++){
            if(n % i == 0) suma += i;
		}
        return suma;
	}
}
        
            

let main = ()=> {
	const n = 6;
	const my_calculator = new Calculator();
	const s = my_calculator.divisorSum(n);
	console.log("I implemented: AdvancedArithmetic");
	console.log(s);
}


module.exports = {
	excecute: main,
	day: 19,
	title: "Interfaces."
};