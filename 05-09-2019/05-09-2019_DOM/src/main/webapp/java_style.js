    var style = document.getElementById("box1").style;

    style.color = "red";
    style.width = "100px";
    style.backgroundColor = "yellow";

    var style = document.getElementById("box2").style;

    style.color = "red";
    style.width = "100px";
    style.backgroundColor = "yellow";

    var style = document.getElementById("box3").style;

    style.color = "red";
    style.width = "100px";
    style.backgroundColor = "yellow";

    function clickMe() {
        var style = document.getElementById("box1").style;

        style.color = "red";
        style.width = "100px";
        style.backgroundColor = "yellow";

        var style = document.getElementById("box2").style;

        style.color = "red";
        style.width = "100px";
        style.backgroundColor = "blue";

        var style = document.getElementById("box3").style;

        style.color = "red";
        style.width = "100px";
        style.backgroundColor = "green";

    }
    ;
    var btn = document.getElementById("btn");
    btn.onclick = clickMe;


