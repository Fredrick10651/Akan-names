var day = document.getElementById("day").value;
var dd = parseInt(day);
var month = document.getElementById("month").value;
var mm = parseInt(month);
var year = document.getElementById("year").value;
var yy = parseInt(year.toString().slice(2, 4));
var century = document.getElementById("century").value;
var cc = Math.ceil(year  /100);

var result = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

 var maleNames =["Kwasi", " Kwadwo", "Kwabena", "Kwaku", "  Yaw", " Kofi"," Kwame"];
 var femaleNames  = ["Akosua", "Adwoa", " Abenaa","Akua", "Yaa"," Afua",  "Ama"];

// Form validation
if (document.getElementById(gender).checked) {
    var gender = "male";
} 
else{
    var gender = "female",
}
if  (dd <= 0 || dd >31) {
    alert("Please, input valid date");
}
else if (mm <= 0 || mm > 12) {
    alert("please, input valid month")
}
else if (month == 2 && dd >29) {
    alert("Invalid day of month")
}
else if 




