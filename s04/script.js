console.log ("connected")

// Types:
// 1. For Loop
// 2. While Loop
// 3. Do-While Loop

// FOR LOOPS - it repeats a block of code as a certain condition is met
// it is used to execute a block of code for a certain numebr of times.

/* 
        SYNTAX: 
        for ( initialization; condition; increment ) - these are params (PARAMETERS)
        {
                // block of code 
        }
        USAGES: 
        1. INITIALIZATION - initializes the counter, variables and and evaluates once unconditionally before the first execution of the loop body.

        2. CONDITION - evaluated at the beginning of each iteration.
          if true, the loop statement is executed
          if false, the loop statement ends
        
        3. INCREMENT - updates the loop counter with a new value each time the loop runs.
*/

// EXAMPLE

for ( let i = 0; i <= 5; i++ ) {
        console.log (`This is number ${ i }`);
}

// if the condition is <= 5, it displays output from 0-5
// if the condition is <5, it displays output from 0-4
// "++i" --> INCREMENT FIRST BEFORE PRINTING

let herName = "Lady Ada Augusta Byron King";

console.log (herName.length);
console.log (herName[6]);

let letter = 0;

for ( letter; letter < herName.length ; letter++) {
        console.log (herName[letter] );
}

// ADDING AN ELEMENT INSIDE AN ARRAY

let fruits = [ "guava", "mangosteen", "santol", "durian" ];
console.log ( fruits );
fruits [ 4 ] = "banana";
fruits [ 5 ] = "strawberry";
console.log ( fruits.length );

let i = 0;

for ( i; i < fruits.length; i++ ) {
        console.log ( fruits[i] )
}

let cars = [
        {
                brand : "Volkswagen",
                type : "SUV"
        },
        {
                brand : "Toyota",
                type : "Sedan"
        },
        {
                brand : "Rolls Royce",
                type : "Phantom"
        },
]

for ( x = 0; x < cars.length; x++ ) {
        console.log (cars[x]); // it displays the properties of the object ("brand" and "type")
        console.log (cars[x].brand); // brands printed
        console.log (cars[x].type); // types displayed
}


// WHILE LOOP --> starts by evaluating condition 
// if true, codeblock gets executed
// if false, codeblock and terminates the loop, or not executed

/*
        SYNTAX: 
        while ( condition ) {
                <statement>
        }
*/

// let count = 0;

// while ( count < 5 ) {
//         console.log ( count );
//         count++;

// }

let index = 2;

while ( index <= 6 ) {
        console.log (index);
        index++;
}
