//a) Create the two arrays below, spelled exactly as they are given.
// This will form the start for all the following questions.
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b) Create a new array called all, 
//which should be a concatenation of the two arrays given above, 
//starting with the boys and ending with the girls. 
all = boys.concat(girls);
console.log(all);

//c) The array type has a cool method to reduce an array into a single string join() (you will love this method)
// Create a comma separated string containing all the names from the all-array, separated by commas.

com = all.join(', ');
console.log(com);

// Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.
hyphen = all.join(' - ');
console.log(hyphen);

console.log(all.unshift("Sarah", "Victor"));

//d)  Add the names Lone and Gitte to the end of the array 
//(remember, all can be done in one-liners)
console.log(girls.push("Lone", "Gitte"));

//e)  Add the names Hans and Kurt to the start of the array
console.log(boys.push("Hans", "Kurt"));

//f)  Remove the first name in the array (Hans)
console.log(boys.shift());

//g)  Remove the last name from the array (Gitte)
console.log(girls.pop());

//h) Remove Ole and Janne from the middle of the array
console.log(all.splice(4,2));

//i) Sanne thinks it’s unfair that the boys have to come first, 
//reverse the all array, so that the girls come first.
console.log(all.reverse());

//j) Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.
console.log(all.sort());

//k)The default sort algorithm doesn’t handle the situation where the name can be either capitalized or not.
// Write a user-defined sort method to fix this problem.

function sortAlpha(a, b){
   a = a.toLowerCase();
   b = b.toLowerCase();
   
   return a > b ? -1 : b > a ? 1 : 0;
}
console.log(all.sort(sortAlpha));

//l) Convert all the names in the array to uppercase.
console.log(all.map(name => name.toUpperCase()));

var nyArray = ["ingrid", "Lars"];
function cil(value){
    return value.charAt(0) === "i" || value.charAt(0) === "L";
}
var ny = nyArray.filter(cil);
console.log(ny);


