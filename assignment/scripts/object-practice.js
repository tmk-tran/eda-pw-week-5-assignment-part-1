console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/


const me = {
  // TODO - add properties here
    firstName: 'T Mark',
    lastName: 'Schisel',
    hasSiblings: true,
    shoeCount: 18,
    favThreeFoods: [ 'Chinese Food', 'Pizza', 'Chicken' ],
};
console.log('A little about me:', me);


/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/


let fullName = me.firstName + ' ' + me.lastName;  //  here, I added a space in '' to correctly log in console
console.log( fullName );


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/


console.log( 'Example 1 of log, first favorite food item: ' + me.favThreeFoods[0] );  //  this is one way to console.log my first favorite food

let firstFoodItem = me.favThreeFoods[0];
console.log( 'Example 2 of log, first favorite food item: ' + firstFoodItem );  //  this is another way to console.log my first favorite food item


console.log( 'Example 1 of log, last favorite food item: ' + me.favThreeFoods[2] );  // example 1 of logging my last favorite food

// example 2 of how to log my last favorite food:
let lastFoodItem = me.favThreeFoods.length - 1;  //  defining a variable and setting it to the last item in my array
console.log( 'Example 2 of log, last favorite food item: ' + me.favThreeFoods[lastFoodItem] );


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/


console.log( 'I currently have ' + me.shoeCount + ' pairs of shoes.' );  // logging my current number of shoes
me.shoeCount ++;  // adding a new pair, yippee!

console.log( 'Now, I have ' + me.shoeCount + ' pairs of shoes...feelin\' fresh!' );  // logging the new amount of shoes


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/


me.favoriteColor = 'Black';  // adding a new value to the existing object using dot notation
console.log( 'Added \'favorite color\' to object. Favorite color is: ' + me.favoriteColor );
console.log( 'The updated object now contains: ', me );  // logging the new object

