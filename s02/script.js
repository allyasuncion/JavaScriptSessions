/* JS Operators - symbols that are used for manipulating values or operands. It is used to perform specific mathematical
and logical computations in operands */

// Assignment operators ( = )

let m = 3;
// "let" can be re-assigned but cannot be redaclared
m = 4;

console.log (m);

let b = m;
console.log (b);

// Arithmetic operators - mathematical operations on numerical values or operands and returns a single numerical value

console.log (20 + 30);
console.log ("20" + "20" + "twelve"); // concatenation - 2020 - links two or more strings together
// string concatenation

a = 30;
c = 40;

console.log (a - c);
console.log (Math.sqrt(a));

// Subtraction

console.log (20-10);
console.log ("20"-"30"); // TYPE COERCION - automatic/implicit conversion of values from one data type to another

let val1 = 50;
let val2 = "40"; // TYPE COERCION

let diff = val1 - val2;

console.log (diff);

// NaN - Not a Number

console.log ("twenty" - "three");

// Multiplication

console.log (10 * 5);
console.log ("10" * 5); // TYPE COERCION

// Division

console.log (50/5);
console.log ("50"/5); // TYPE COERCION

// Modulo (%) - remainder 
console.log (100 % 3); // 1 - number
console.log ("100" % 3); // 1 - number

// Increment (++) and Decrement (--)

let d = 1;
console.log (++d); // increased by 1
console.log (d);
console.log (--d); // decreased by 1
console.log (d); 


// if operators come first (++) and (--), it performs arithmetic operations before displaying the result
console.log (d++);
console.log (d);
console.log (d--);
console.log (d);

// if operand (variable) comes first before the operator (++) and (--), it displays the value of the operand before performing arithmetic operations

console.log ("BREAK");

// Fisrt Problem

console.log (2 + 4);
console.log (2 - 4);
console.log (2 * 4);
console.log (2 / 4);

console.log ("BREAK");

// Second Problem

let x = 3;
let y = 6;

console.log (x + y);
console.log (x - y);
console.log (x * y);
console.log (x / y);

console.log ("BREAK");

// Third Problem

let z = 9;

console.log (z * (x - y));

// Compound Assignment  Operators 
// Addition - Assignment Operator ( += )

let i = 15;
console.log ( i += 3);

// Subtraction - Assignment Operator ( --= )

console.log ( i -= 10);

// Multiplication - Assignment Operator

console.log ( i *= 5 );

// Division - Assignment Operator

console.log ( i /= 2 );

// Comparison Operators
// compares two operands and returns a logical value (true or false)
// relational < - less than and > - greater than

// Equality operator "Loose equality" (==)
//  COERCION is ALLOWED
// Compares the value REGARDLESS of data type

console.log ("Jan" == "Jan");
console.log ("Jan" == "January");
console.log (true == true);
console.log (false == true);
console.log (null == undefined); // true - both empty primitive data

console.log ("20" == 20); // true - type coercion
console.log (true == 1); // true - binary - 1 - true
console.log (false == 0); // true - binary - 0 -false

// parseInt() - conversion for whole numbers
// parseFloat() - for decimal numbers

let ex = 75.68;
console.log (parseInt(75.68)); // rounds up the decimal values
console.log (parseFloat("75.68")); // retains the decimal values
console.log (parseInt("75.6888").toFixed(2)); // displays number of decimals in the whole number
console.log (parseFloat("75.6888").toFixed(3)); // displays number of decimals in the whole number

// Strict Equality Operator (===) 
// compares "sameness of value" and data type
// NO COERCION ALLOWED

console.log (1 === 1); // true
console.log ("20" === 20); // false, nullifies type coercion
console.log (true === 1); // false
console.log (null === undefined); // false
console.log ("Daniel" === "James"); // false - different strings of data
console.log (true === true); // true
console.log (false === false); // true - same boolean data
console.log (false === true); // false

// Inequality Operator ( != ) "loose inequality operator"
// compares "difference in values"
// coercion will take place

console.log (false != true); // true
console.log (3 != 3.00); // false
console.log (3 != 3.01); // true
console.log ("3" != 3); // false - type coercion applies
console.log ("3" != 3.1); // true
console.log (null != undefined); // false - type coercion applies
console.log (true != 1);  // false - type coercion applies

// Greater than ( > )

console.log (100 > 75);
console.log (100 >= 100); // true

// Less than ( < )

console.log ( 45 < 50);
console.log (45 <= 44.9999); // true 
console.log (1 <= -1);


// Logical Operators

// AND operator ( && )

console.log (true && true); // true
console.log (("asd" == "asd" )  && ( undefined == null)); // true 
console.log (false && false); // false - conjunction - if one is false, everything is false

let kei = true; // BINARY VALUES = 1 is True, 0 is False
let el = false;

console.log (kei > 2 && kei < 2);
                // false && false ; ---> False

console.log (kei == el);

let isOnline = true;
let isBoss = false;
let chatSiBoss = isOnline && isBoss;

console.log (chatSiBoss);

// "OR" operator ( || )
// it evaluates to true of either the operation is true
// if both operands are true, RESULT IS TRUE
// if both operands are false, RESULT IS FALSE

console.log ( true || true); // true
console.log ( true || false ); //true
console.log ( false || true ); // true
console.log ( false || false ); // false

// "NOT" operator

console.log (!true); // false
console.log (!false); // true

let isAdmin = true;
let isInstructor = 1;
let isAnswer = !isAdmin === isInstructor;
console.log (isAnswer); // false - not equal

let faveNum = 333;
let chooseNum = 456;

let isHigher = ! ( chooseNum > faveNum || faveNum <= chooseNum );
                        // T || T
                        // !(true)
console.log (isHigher); // False
console.log (true && false);


// Selection Control Structures


