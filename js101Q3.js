(function(exports) {//node module
	//add function
	function add(num1, num2) {
		return (num1 + num2);
	};
	//subtract funtion
	function subtract(num1, num2) {
	        return (num1 - num2);
	};
	//multiply function
	function multiply(num1, num2) {
		return (num1 * num2);
	};
	//divide function
	function divide(num1, num2) {
		return (num1 / num2);
	};

	//export each of the names to acces the function outside
	exports.add = add;
	exports.subtract = subtract;
	exports.multiply = multiply;
	exports.divide = divide;

})(module.exports);
