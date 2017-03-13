var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

///////////////////////////////////////////////////////////////////////////////
//                                                      Explorer Mode                                                                    //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:
function sum(a, b){
  return a + b;
}

// write your console.log/asserts here:
// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
console.log('sum of 2 and 3 is ', sum(2,3));
console.assert(sum(2,3), 5);
console.assert(sum(1,0), 1);
console.assert(sum(-48,5), 43);

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:
function avg (a, b, c){
  return (a + b + c) / 3;
}

// write your console.log/asserts here
console.log('avg of 2, 5, and 8 is', avg(2, 5, 8));
console.assert(avg(2,5,8), 5);
console.assert(avg(1,5,10), 5.333333333333333);
console.assert(avg(3,8,9), 6.666666666666667);


// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:
function getLength(string){
  return string.length;
}

// write your console.log/asserts here:
console.log('the word \'string\' is ' + getLength('string') + ' characters long');
console.assert(getLength('car',3));
console.assert(getLength('stringcheese'),12);
console.assert(getLength('whiteboard'),10);


// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here:
function greaterThan(a, b){
  if (a > b) {
    return true;
  } else
    return false;
};

// write your console.log/asserts here:
console.log("is 5 greater than 2? " + greaterThan(5,2));
console.assert(greaterThan(5, 2), true);
console.assert(greaterThan(20,10), true );
console.assert(greaterThan(25, 19), true);


// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formatted like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:
function greet(name){
  return "Hello, " + name;
}

// write your console.log/asserts here:
console.log(greet("Dres"));
console.assert(greet("Dres"), "Hello, Dres");
console.assert(greet("Ollie"), "Hello, Ollie");
console.assert(greet("Emily"), "Hello, Emily");

// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:
function madlib (noun, adjective, verb, adverbLY){
  return "Hi, I'm a " + adjective + " " + noun + " and I like to " + verb + " very " + adverbLY;
}


// write your console.log/asserts here:

console.log(madlib("dog", "fluffy", "run", "slowly"));
console.assert(madlib("dog", "fluffy", "run", "slowly"),"Hi, I'm a fluffy dog and I like to run very slowly");
console.assert(madlib("cat", "chubby", "chase", "gracefully"), "Hi, I'm a chubby cat and I like to chase very gracefully");
console.assert(madlib("penguin", "chill", "flop", "generously"), "Hi, I'm a chill penguin and I like to flop very generously");


// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:
function max(a, b){
  if (a > b){
    return a;
  } else {
    return b;
  }
};

// write your console.log/asserts here:
console.log("which is greater, 3 or 2? " + max(3,2));
console.assert(max(3,2), 3);
console.assert(max(5,2), 5);
console.assert(max(100,50), 100);

// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:
function maxOfThree(a, b, c){
  if (a > b) {
    if (a > c) {
      return a;
    } else return c;
  } else if (b > a) {
    if (b > c) {
      return b;
    } else return c;
  }
};

// write your console.log/asserts here:
console.log("out of 5, 10, and 11, which is greater? " + maxOfThree(5,10,11) );
console.assert(maxOfThree(5,10,11), 11);
console.assert(maxOfThree(10,12,11), 12);
console.assert(maxOfThree(85,20,110), 110);



// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:
function isVowel (singleLowerCaseChar){
  if (singleLowerCaseChar === 'a') {
    return true;
  } else if (singleLowerCaseChar === 'e') {
    return true;
  } else if (singleLowerCaseChar === 'i') {
    return true;
  } else if (singleLowerCaseChar === 'o') {
    return true;
  } else if (singleLowerCaseChar === 'u') {
    return true;
  } else return false;
};

// write your console.log/asserts here:
console.log("Is 'a' a vowel? " + isVowel('a') );
console.assert(isVowel('i'), true);
console.assert(isVowel('e'), true);
console.assert(isVowel('o'), true);


// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:
function translate (string){

  var vowels = ["a", "e", "i", "o", "u", " "];
  var newText = "";
  for (i = 0; i < string.length; i++) {
     var current = string.charAt(i);
    if (vowels.indexOf(current) != -1)
    newText = (newText + (current));
   else
    newText = (newText + (current + "o" + current));
  }
  return newText;
}


// write your console.log/asserts here:
console.log(translate("word"));
console.assert(translate("word"), "woworordod" );
console.assert(translate("headrest"),"hoheadodroresostot");
console.assert(translate("mug"),"momugog");



// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:
function reverse (string) {
  var reversed = "";
  for (var i = string.length-1; i >= 0; i--){
    var current = string[i];
    reversed = reversed + string[i]
  }
  return reversed;
}
// write your console.log/asserts here:
console.log("tacocat reversed is " + reverse("tacocat"));
console.assert(reverse("word"),"drow");
console.assert(reverse("glass"), "ssalg");
console.assert(reverse("tacocat"), "tacocat");


// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:
function largest(arrayOfNumbers){
  var l = arrayOfNumbers.length;
  var max = 0;
  for (var i = 0; i < l; i++) {
    if (arrayOfNumbers[i] > max){
      max = arrayOfNumbers[i];
    }
  }    return max;
};



// write your console.log/asserts here:
console.log('the largest number in the `numbers` array is ', largest(numbers));
console.assert(largest(numbers), 101);


// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:
function longest(array){
  var max = 0;
  var word = "";
  for (var i = 0; i < array.length-1; i++){
    if (array[i].length > max){
      max = array[i].length;
      word = array[i];
    }
  }
  return word;
}
// write your console.log/asserts here:
console.log("the longest word in the array is " + longest(strings));
console.assert(longest(strings), "collection");


// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:
function getEvens (arrayOfNumbers){
  var l = arrayOfNumbers.length;
  var arr = [];
  for (var i = 0; i < l; i++){
    if (arrayOfNumbers[i] % 2 === 0) {
      arr.push(arrayOfNumbers[i]);
    }
  }
  return arr;
}

// write your console.log/asserts here:
console.log("the even numbers in the array are " + getEvens(numbers));
console.assert(getEvens(numbers), [12,4,18,6]);


// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:
function getOdds (arrayOfNumbers){
  var l = arrayOfNumbers.length;
  var arr = [];
  for (var i = 0; i < l; i++){
    if (arrayOfNumbers[i] % 2 === 1) {
      arr.push(arrayOfNumbers[i]);
    }
  }
  return arr;
}
// write your console.log/asserts here:
console.log("the odd numbers in the array are " + getOdds(numbers));
console.assert(getOdds(numbers), [1, 9, 7, 11, 3, 101, 5]);


// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:
function containsIs (arrayOfStrings){
  var arr = [];
  var l = arrayOfStrings.length;
  for (var i = 0; i < l; i++){
    if (arrayOfStrings[i].includes("is")){
      arr.push(arrayOfStrings[i])
    }
  }
  return arr;
}

// write your console.log/asserts here:
console.log("the only words that contain 'is' in the array are " + containsIs(strings));
console.assert(containsIs(strings), ["this", "is"]);


///////////////////////////////////////////////////////////////////////////////
//                                                      Adventurer Mode                                                              //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:

// write your console.log/asserts here:
//console.log('the objects that match javascript teachers are', objectMatches('JavaScript', 'teaches', instructors))

///////////////////////////////////////////////////////////////////////////////
//                                                      Epic Mode                                                                            //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
    // at least 8 characters
    // contains at least one number
    // contains at least one of the following: . , ! $ &
    // contains at least one capital letter and one lowercase letter
// write your code here:

// write your console.log/asserts here:
