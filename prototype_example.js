var speak = function(saywhat) {
	console.log(saywhat)
}
// constructor
var Dog = function() {
	var name,breed;
}

var Cat = function() {
	var name,breed;
}
// inheritance basically adds a function or prototype outside to a constructor
Dog.prototype.speak = speak;
Cat.prototype.speak = speak;

firstDog = new Dog;
firstDog.name = "rover";
firstDog.breed = "doberman";
firstDog.speak("woof");

firstCat = new Cat;
firstCat.name = "meow meows";
firstCat.breed = "persian";
firstCat.speak("puur");