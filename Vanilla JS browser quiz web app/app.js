function submitAnswers() {
	var total = 5; 
	var score = 0;

	//get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	//validation
	for(i = 1; i <= total; i++) {
		if (eval('q'+i) == '' || eval('q'+i) == null) {
			alert('You missed question '+ i);
			//stop submitting the form
			return false;
		}
	}

	//set correct answers
	var answers = ["a","b","c","d","e"]

	for (i = 1; i <= total; i++) {
		//check the answers
		if(eval('q'+i) == answers[i - 1]) {
			score++;
		}
	}

	//display results
	var results = document.getElementById('results');

	//set h3 html to show results
	results.innerHTML = '<h3>You scored <span> ' + score + '</span><span>out of ' + total + '</span></h3>';
	alert('You scored ' + score+' out of '+total);

	//stop submitting the form
	return false;
}