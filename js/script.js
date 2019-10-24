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

// Function that displays the dogs in the array 
function writeDogs(){
	document.getElementById('dogBreedResults').innerHTML += '<h3>Dog Breeds in Array</h3>';	
	for(i=0; i < dogBreeds.length; i++){
		document.getElementById('dogBreedResults').innerHTML += dogBreeds[i] + '<br>';
	}
	
}
// Function that clears the results for the dog array
function clearDogs(){
	document.getElementById('dogBreedResults').innerHTML = '';
}
// Clears search field for dogs
function clearField() {
	document.getElementById('dogBreedInput').value = '';
}

// An array of dog breeds that can be accessed by the user
var dogBreeds = ['jack russell' , 'golden retreiver' , 'beagle'];
// Querried function that writes what dogs in the array when page 
writeDogs();

// Adding dog to the array
document.getElementById('addToBtn').addEventListener('click' , function() {
	clearDogs();
	// Takes user input from field
	var dogSearchQuerry = (document.getElementById('dogBreedInput').value).toLowerCase();
	// Adds the user inputted dog breed to the array
	dogBreeds.push(dogSearchQuerry);
	writeDogs();
	// Clears the input field for entering new query
	clearField();
});

// Deleteing dog from the array
document.getElementById('deleteFromBtn').addEventListener('click' , function() {
	clearDogs();
	var x = 0;
	// Records querry inputted by user
	var dogSearchQuerry = (document.getElementById('dogBreedInput').value).toLowerCase();
	// Deletes dog from array
	var index = dogBreeds.indexOf(dogSearchQuerry);
	for(i=0; i < dogBreeds.length; i++) {
		if(dogBreeds[i] === dogSearchQuerry) {
			delete dogBreeds[i];
			x = i;
			console.log(dogBreeds);
			
		} else if (dogBreeds.includes(dogSearchQuerry) === false) {
			console.log(dogBreeds);
			document.getElementById('dogBreedResults').innerHTML = '<p>The array does not include that breed</p>';
		} else if (x == i){
			console.log(dogBreeds);

			document.getElementById('dogBreedResults').innerHTML += " This is deleted";
		}
		else {
			console.log(dogBreeds);
			document.getElementById('dogBreedResults').innerHTML += dogBreeds[i] + '<br>'; 
		}
	}
	// dogBreeds.splice(dogSearchQuerry);
	// writeDogs();
	console.log(dogBreeds);
	clearField();
});

// Sorting Dogs by alphabetical
document.getElementById('sortBtn').addEventListener('click' , function() {
	// Clears results field for dogs so that the array won't duplicate for the user
	clearDogs();
	for(i=0; i < dogBreeds.length; i++) {
		// Sorts dogs alphabetically from a - z
		dogBreeds.sort();
		// Re-writes the dog breeds in their new order
		writeDogs();
	}
});







































