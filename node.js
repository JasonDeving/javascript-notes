var temp = process.argv.slice(2);

for (var i = temp.length - 1; i >= 0; i--) {
	console.log(temp[i], i);
};

console.log(temp[0] + " " + temp[1]);