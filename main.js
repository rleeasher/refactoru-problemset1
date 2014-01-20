//takes a string and then capitalizes every word

var letterCapitalize = function(str){
	var arr = str.split(" ");
	for (i=0; i<arr.length; i++){
		var arrWord = arr[i].split("");
		arrWord[0] = arrWord[0].toUpperCase();
		arr[i]= arrWord.join("");
	}
	var finishedStr = arr.join(" ");
	return finishedStr;
};

//takes a string and returns the number of words
var wordCount = function(str){
	var arr = str.split(" ");
	return arr.length;
};

//takes a number and determines is it is prime
var primeTime = function(num){
	var counter = Math.round(Math.sqrt(num));
	console.log(counter);
	for (i = 2; i<counter+1; i++){
		var isPrime = true;
		if (num%i === 0) {
			isPrime = false;
		return isPrime;
		};

	}
	return isPrime;
};



$('.submit').click(function(){
	$('.results').text("The capitalized form is: "+letterCapitalize($('#string-input').val())
		+ ". The word count is: "+ wordCount($('#string-input').val()));
});

$('.submit2').click(function(){
	$('.results2').text("Is it a prime?: " + primeTime($('#number-input').val()));
});
