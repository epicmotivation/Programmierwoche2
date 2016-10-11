/**
 * Created by Admin on 27.09.2016.
 */

/*jslint browser:true */

var x = 1;

document.getElementById("Knopf").addEventListener("click", function () {
    "use strict";
    var divTest = document.getElementById("Test").appendChild(document.createElement("li"));
    divTest.innerHTML = "Punkt" + x;
    x = x + 1;
});

