var questions = [
	"what is your fave hobby",
	"what do you like programming",
	"Do you dev?"
];

var answers = [];

function ask(i) {
	process.stdout.write(`\n\n\n\ ${questions[i]}`);
	process.stdout.write(" > ");
}

process.stdin.on('data', function(data){
	answers.push(data.toString().trim());

	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	}
});

process.on('exit', function(){
	process.stdout.write("\n\n\n\n")
	process.stdout.write(`Your favorite language is ${answers[1]} 
                          Your favorite thing to do is ${answers[0]}
                          I dev ${answers[2]}
		`)
	process.stdout.write("\n\n\n\n")
});

ask(0);

