
let x = 16;
let y = 32;
let z = 64;

//toFixed
/*    let a = x.toFixed(1);
    let b = toString(x)
    console.log(
        typeof("Luca")
    );*/

//    let c = " <3 "

//Arrays
//    let hobbies = ["Gaming", "Jiu-Jitsu"]
//    console.log(hobbies[1]);

//var output = document.getElementById("output");

/*let nameUpper = "LUCA";

let nameLower = nameUpper.toLowerCase();

console.log(nameLower);*/

//console.log(Number("100"))

//array concat
let likes = ["fish", "quinoa", "sandwiches"];
let moreLikes = ["bikes", "Lee"];

let allLikes = likes.concat(moreLikes);

//street no., street name, building name, suburb, city, postal code
let address = ["81", "Kommetjie road", null, "Fish hoek", "Cape Town", "7975"];

let fullAddress = address[0]+" "+address[1]+" "+address[2]+" "+address[3]+" "+address[4]+" "+address[5];

// console.log(fullAddress);




// Define a constant variable  named 'w' that contains the number 99
const w = 99;
// Define a variable called 'o' that contains the string 98
// let o = "98";
// Define a global variable called school that contains the school that you went to.
var school = "MIT";
// Define an Array using let called 'stuff' holding the number 10 and a string saying "ten"
let stuff = [10, "ten"];

// Define an array containing 3 breeds of dog. Call the array dogs.
// let dogs = [Shepard, Ridgeback, Swiss];
// Define an array containing 3 other animals. Call the array animals.
// let animals = [Gecko, Wombat, Dassie];
// Write a line of code that adds another breed of dog to the dog array.
// dogs.pop();
// Remove the last animal from the animals array.

// Define a variable containing the 1st item in the dogs array

// Define an array that contains all the animals in both arrays.
// animals.concat(dogs);


let a = 1;
let c = 0;
let d = 0;

if(c >= 30 || c < a){
    //console.log("Yes ");
}

else if(a == 1){
    console.log("Maybe ");
}

else{
    console.log("no ");
}

// objects
// let userInfo = {id:01,name:"Luca",surname:"Bazzea",phone:"0987654321",single:false,age:19,likes["Sushi", "Bikes", "Jiu-Jitsu"]}

// Loop for
names = ["Rudi", "Lori", "Kati", "Elizabeth"]

for(i=0;i<names.length;i++){
   // console.log(names[i].toUpperCase())
}

// Loop while

/* let b = 0

while(b < 100){
    console.log("the value of b is " + b)
    b+=2;
} */

/*let box = []

while(box.length<5){
    box.push("something")
}
console.log(box)*/

let user = {name:"Lori",surname:"Gneth",age:23,gender:"male"}

function match(){
    if(user.age>20){
        return "Congrats! you matched with " + user.name + " " + user.surname + " aged: " + user.age
    }
    else {
       return "No match </3"
    }
}

// alert(match());


// Define a function that takes no parameters and logs
// "Hello World" to the console call it hello()

function hello (){
    console.log("Hello World")
}

// Define a function called squares that takes
// a number and returns the square of that number

function squares (y){
    return y*y
}

// Define a function that takes a boolean value and logs
// "yes" to the console if true and no to the console if false

function boolean (io){
    if(io){
        return console.log("yes")
    }
    else{
        return console.log("no")
    }
}

var gif = []
var words = ["I told you not to click","Don't do it again","I'm not messing around buddy","Stop it!"]

let pTag = document.getElementById("wordElement")


let wordCounter = 0

// pTag.innerHTML = words[wordCounter]

function whenClicked(){
    if(wordCounter<3){
        wordCounter++
        pTag.innerHTML = words[wordCounter]
    }
    else{
        pTag.innerHTML = gif
    }

}