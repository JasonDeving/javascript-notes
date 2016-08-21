var speak = function(what) {
	console.log(what)
}

var saySomething = {normal: "meow", love: "purr"}
speak.call(saySomething, saySomething.normal);
