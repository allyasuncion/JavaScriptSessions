console.log ("connected");

// Selection Control Structure

// If statement
//2 way decision statement
//it executes a command or makes decisions CONDITIONALLY
// let age = prompt ("Enter your age:");

// function getAge (age) {
//         if (age < 30) {
//                 console.log ("You are not allowed.");
//         }
//         else if ( age == 30 ) {
//                 console.log ("You are thirty years old.")
//         }
//         else if ( age > 30 ){
//                 console.log ("You are allowed.") 
//         }
//         return (age);
// }

// getAge(age);


// PROBLEM 1

// let height = prompt ("Please enter your height in centimeters: ");

// PROBLEM 2

// function getHeight ( height ) {
//         if (height < 150) {
//                 console.log ("Did not pass the minimum height requirement");
//         }
//         else {
//                 console.log ("Passed the minimum height requirement");
//         }
// }

// getHeight(height);


// Else If - 2 or more possible outcomes

// Syntax

/* 
        if (condition) {
                // argument 1
        } else if {
                // argument 2
        } else if {
                // argument 3
        }
*/

//Exercise 2

// let windSpeed = prompt (" Input Windspeed to determine Typhoon Intensity:  ");

function typhoonIntensity (windSpeed) {
        if ( windSpeed <= 30) {
                console.log ("Not a typhoon");
        } else if ( windSpeed > 30 && windSpeed < 60 ) {
                console.log ("Tropical depression is detected");
        } else if ( ( windSpeed >= 61 ) && ( windSpeed <= 88 ) ) {
                console.log ("Tropical storm is detected");
        } else if ( ( windSpeed >= 89 ) && ( windSpeed <= 117 ) ) {
                console.log ("Severe tropical is detected");
        } else {
                console.log ("Typhoon detected");
        }
}
// typhoonIntensity(windSpeed);

// Switch statement - used to perform different actions on different conditions
// Compare the same expression to several different values

// RULE OF THUMB 
/* 
        You can use this statement when you are comparing a list of values
        against a single variable
*/

/* 
        SYNTAX:
        switch ( expression ) {
                case ( condition ) 1 :
                        // statement
                        //break; --> stops the execution inside the switch block
                case ( condition ) 2 :
                        // statement
                        // break
                        .
                        .
                        .
                default:
                        // statement
                        specifies the code to run if there is no match
        }
*/

let name = "Shackile Asuncion";
console.log (name.length);

//Arrays and Objects

let numbers = [ 1, 54, 58, 60, 75, 90, 99 ];
console.log (numbers.length);

let grades = [
        // properties are also known as key-value pair
        { first : 90 },
        { second : 92 },
        { third : 94 },
        { fourth: 96 }
];

console.log (grades.length); // it displays the number of objects

if ( numbers.length == 7 && grades.length >= 4 ) {
        console.log ( "From the codeblock" );
} else {
        console.log ( "From the others" );
}

// BONUS
