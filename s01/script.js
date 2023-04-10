console.log("connected");

// This is a single line comment
/* multi line comment
    sample comments
    any spaces will do

*/

// Naming Variables

const pi = 3.1416; // constant variables cannot be reassigned.
//pi = 2.123231;
console.log(pi);

let name1 = "Borris";

name1 = "Richard";

console.log(name1);

// let name1 = "Russel";

// console.log(name1); //let cannot be re declared.

// var food = "pizza";  //ES6 slowly unused var 
// console.log (food);

// Primitive Data Types

let name = "Joel";
name = 'Tonet';
name = `Kokou`;
console.log (name);

let age = 15;
console.log (age);
console.log (age + 15);
console.log (typeof age); // Displays the data type that was assigned in the variable.
console.log (typeof name1);

age = 90.5;
console.log (age);

let myCopy; // declaring an undefined variable in a camel case notation.
console.log (myCopy);

let option1 = null;
console.log (option1);


// Objects
let person = {
    name : "Jose",
    age : 30,
    address : "Calamba, Laguna",
    isDoctor : true,
    spouse : null,
    siblings : [ //arrays
        "Paciano",
        "Maria",
        "Saturnina",
        "Josefina",
        "Narcisa",
        "Lucia",
        "Soledad",
        "Concepcion",
        "Trinidad"
    ]
    
}

console.log (person); // it displays the object content
console.log (person.name);
console.log (person.address);
console.log (person.siblings); // it displays an array of siblings.
console.log (person.siblings[2]);


//NOTE: use dot (.) notation to call the properties in the specific object.

/* Arrays - the collection of related data
 Elements - each data stored in an array
 can be accessed by INDEXES
*/

let fruits = ["Apple", "Pear", "Guava", "Grape"];
console.log (fruits);
console.log (fruits.length); // this method displays the size of an array or number of elements
console.log (fruits[2]);
console.log (fruits[3]); // elements - start @ 1, arrays - start @ 0.

// Function
    // Function declaration
    // Function keyword
    // Function name and parenthesis (which holds the parameters)
    // curly braces - determines the block of codes or statements that are written inside the code block 


function greeting(firstName, lastName) {
    // parameters are also known as "ARGUMENTS" & "PROPERTIES" & "ATTRIBUTES"
    console.log (`My Name is ${firstName} ${lastName}. It was nice to meet you!`);
    
}

greeting("Gerard", "Way");
greeting("Ray", "Toro");

function product(a, b) {
    console.log ("Product: ");
    return (a*b);

}

console.log (product(4,4))


function averageOfthreeNos(a, b, c) {
    console.log ("Average of three numbers: " + a, b, c);
    return ((a + b + c)/3);
}

console.log (averageOfthreeNos(2,2,3));

function meterTokilometer (a) {
    const m = 1000;
    console.log ("Meter: " + a);
    return ("Kilometer: " + (a/m));
}

console.log (meterTokilometer(20));


