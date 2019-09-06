//opgave 1/2
////Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
};

//Callback example

try {
    var cb = function (n1, n2, callback) {
        if (n1 === null) {
            throw new IllegalArgumentException("should be a number");
        }
        if (n2 === null) {
            throw new IllegalArgumentException("should be a number");
        }
        if (callback === null) {
            throw new NullPointerException("cant be null");
        }
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
    };
} catch (e) {
    console.log("test");
}
//fjern // for at teste.
try {
    //console.log(add(1, 2)); //dette viser 1+2 = 3
    //console.log(add); //viser funktionensnavn. 
    //console.log(add(1, 2, 3)); // 3
    //console.log(add(1)); // udskriver NAN fordi den forventer 2 værdier.
    //console.log(cb(3, 3, add));//den udskriver Result from the two numbers: 3+3=6
    //console.log(cb(4, 3, sub)); // først kalder den cb funktionen og udskriver alt indtil den rammer callback der siger returnere n1-n2
    console.log(cb(3, 3, add())); //efter at have kaldt cb funktionen, laver den en callback til add, men add forventer nogle parametre.
} catch (e) {
    console.log("test");
}
//opgave 4-5
//4)  Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
function mul(n1, n2) {
    return n1 / n2;
}
console.log(cb(2, 4, mul));


//Getting comfortable with filter, map and forEach:
//1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.).
// Use the filter method to create a new array with only names of length <=3.
var nameArray = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
const result = nameArray.filter(name => name.length <= 3);

console.log(result);
console.log(nameArray);

//Use the forEach method to iterate and print (console.log) both the original and the new array.
nameArray.forEach(function (element) {
    console.log(element);
});

//2) Use the names-array created above, and, using its map method, create a new array with all names uppercased.
console.log(nameArray.map(names => names.toUpperCase()));


//3) Use map, join + just a little bit more to create a function, which given the array of names,
// for example: ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul>
//nameArray.forEach(function(name){
// console.log("<ul>" + "<li>" + name + "</li>" + "</ul>");  
//}
var obj = nameArray.map(function (name) {
    return name;
}).join("</li><li>");

console.log("<ul><li>" + obj + "</li></ul>");

//4)  Given this JavaScript array
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

var time = function (car) {
    return (car.year >= 1999);
};
var yearCar = cars.filter(time);

console.log(yearCar);

var name = function (car) {
    return (car.make = 'Volvo');
};
var makeCar = cars.filter(name);

console.log(makeCar);

var price = function (car) {
    return (car.year < 5000);

};
var priceCar = cars.filter(price);

console.log(priceCar);

//4a)      Use map, join + just a little bit more to implement a function, that ,
// given the cars array used above, will create, and return a string with valid 
// SQL statements to insert the data into a table with matching column names 
// (id, year, make, model, price) as sketched below:

var obj = cars.map(function (obj) {

    return obj;
}).join(", ");
var car = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000}
];
var sql = "INSERT INTO cars (id, year, make, model, price) VALUES ()";
console.log(sql);

//Asynchronous Callbacks
//1) Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:
//console.log("aaaaaaaaaa"); vil blive udskrevet først samt b og d eftersom de bliver udskrevet før
//hvor delay først efter de er blevet udskrevet kommer. 
//msgPrinter viser en besked samt en delaytimer, hvilket betyder at e kommer først så kommer d. 
var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");
