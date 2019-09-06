function clickMe(e) {
    var me = this;
    var target = e.target;
    //document.getElementById("b1").innerHTML = "hi from first box";
    document.getElementById("p1").innerText = "hi from " + target.id;
}
var button1 = document.getElementById("b1");
button1.onclick = clickMe;

function clickMe2(e) {
    var me = this;
    var target = e.target;
//    document.getElementById("b2").innerHTML = "hi from second box";
    document.getElementById("p1").innerText = "hi from " + target.id;
}
var button2 = document.getElementById("b2");
button2.onclick = clickMe;

function clickMes(e) {
    var me = this;
    var target = e.target;
    //alert("pressed " + target.id); 
    document.getElementById("p1").innerText = target.id;
}
var btn1 = document.getElementById("outer");
btn1.addEventListener("click", clickMes, false);



var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);


var tag = "<ul>" + all.map(function (x) {
    return "<li>" + x + "</li>";
}).join("") + "</ul>";

document.getElementById("tabel").innerHTML = tag;


function addName(name) {
    name = document.getElementById("inputText").value;
    console.log(name);
    all.push(name);
    var tag2 = "<ul>" + all.map(function (x) {
        return "<li>" + x + "</li>";
    }).join("") + "</ul>";
    document.getElementById("tabel").innerHTML = tag2;
}
var addButton = document.getElementById("send");
addButton.onclick = addName;

function removeFirst() {
    all.shift();
    var tag2 = "<ul>" + all.map(function (x) {
        return "<li>" + x + "</li>";
    }).join("") + "</ul>";
    document.getElementById("tabel").innerHTML = tag2;
}
var removeButton = document.getElementById("first");
removeButton.onclick = removeFirst;

function removeLast() {
    all.pop();
    var tag2 = "<ul>" + all.map(function (x) {
        return "<li>" + x + "</li>";
    }).join("") + "</ul>";
    document.getElementById("tabel").innerHTML = tag2;
}
var removeButtonLast = document.getElementById("last");
removeButtonLast.onclick = removeLast;