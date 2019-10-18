console.log('Class Exercises');

// Blank variables for the user's inputted string
var givenString = 0;
var reversedString = 0;

document.getElementById('submitString').addEventListener('click', function() {
	// Takes the inputted string from the user and stores it in the 'givenString' variable
	givenString = document.getElementById('userString').value;
	// Converts the given string into lower case characters
	var givenStringLower = givenString.toLowerCase();
	console.log(givenString);

	// Takes the users string and reverses it
	// Takes user input and turns it into an array
	reversedString = givenStringLower.split('');
	// Takes the array and reverses it
	reversedString = reversedString.reverse();
	// Takes the reversed array and joins it together and converts it into a string
	reversedString = reversedString.join('');
	console.log(reversedString);

	// Checks to see if the given string is the same as the reversed version
	if (givenStringLower == reversedString) {
		console.log('The word is a Palidrome');
		// outputs the word how the user has written it if it is a palidrone
		document.getElementById('stringOutput').innerHTML = '<b>' + givenString + '</b> is a Palidrome';
	} else {
		document.getElementById('stringOutput').innerHTML = '<b>' + givenString + '</b> is not a Palidrome';
		// outputs the word how the user has written it if it is not a palidrone
		console.log('The word is not a Palidrome');
	}
});


// Find out whether a users inputted number is odd or even
var x = 0;
// Finding out whether a number is an odd or even
document.getElementById('submitOddOrEven').addEventListener('click', function() {
	// Takes string entered by user in field and converts to a interger value
	x = parseInt(document.getElementById('userOddOrEven').value);
	console.log(x);

	// If the interger can be divided by 2 with no remainder, then it is an even number
	if(x % 2 === 0) {
		document.getElementById('resultOddOrEven').innerHTML = 'Your number <b>' + x + '</b> is divsable by 2';
	} 
	// If the number cannot be devided by 2 with no remainder, then it is not an even number
	else {
		document.getElementById('resultOddOrEven').innerHTML = 'Your number <b>' + x + '</b> is NOT divsable by 2';
	}
});


// Replacing words in a sentence
// Original sentence
var givenSentence = 'The good news is that everyone makes mistakes. All of the mistakes you make, have been made by others who started off just like you.';
console.log(givenSentence);
// Tells the event what words to change and effects the whole variable
var replacedSentences = givenSentence.replace(/mistakes/g, 'bugs');
console.log(givenSentence);

// Doesn't display any text until the button has been pressed
document.getElementById('changeSentece').addEventListener('click', function() {
	// Displays the first sentence on the left hand side of the screen
	document.getElementById('originalSentence').innerHTML = givenSentence;
	// Displays the edited sentence on the right hand side of the screen
	document.getElementById('editedSentence').innerHTML = replacedSentences;
});


































