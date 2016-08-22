var plus = function() {
	var sum = 0;
	for(var i = arguments.length - 1; i >= 0; i--) {
		sum += arguments[i];
	}
	return sum;
}
var times = function() {
	var sum = 1;
	for(var i = arguments.length - 1; i >= 0; i--) {
		sum *= arguments[i];
	}
	return sum;
}

console.log(plus(2,2))