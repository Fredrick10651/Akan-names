var day = document.getElementById("day").value;
var dd = parseInt(day);
var month = document.getElementById("month").value;
var mm = parseInt(month);
var year = document.getElementById("year").value;
var yy = parseInt(year.toString().slice(2, 4));
var century = document.getElementById("century").value;
var cc = Math.ceil(year  /100);

