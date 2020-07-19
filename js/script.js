function myButton(){
var day = document.getElementById("day").value;
var dd = parseInt(day);
var month = document.getElementById("month").value;
var mm = parseInt(month);
var year = document.getElementById("year").value;
var yy = parseInt(year.toString().slice(2, 4));
// var century = document.getElementById("century").value;
var cc = Math.ceil(year / 100);

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
    alert("Invalid day of month");
}
else if (Math.round(result) == 0 && gender === "male") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + maleName[0]);
}
else if (Math.round(result) == 1 || Math.round(result)  ==-1 && gender == "male") {
    document.getElementsByClassName("final").innerHTML = ("Your Akan name is" + maleName[1]);
}
else if (Math.round(result) == 2 || Math.round(result)  ==-2 && gender === "male") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + maleName[2]);
}
else if (Math.round(result) == 3 || Math.round(result)  ==-2 && gender === "male") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + maleName[3]);
}
else if (Math.round(result) == 4 || Math.round(result)  ==-4 && gender === "male") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + maleName[4]);
}
else if (Math.round(result) == 5 || Math.round(result)  ==-5 && gender === "male") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + maleName[5]);
}
else if (Math.round(result) == 6 || Math.round(result)  ==-6 && gender === "male") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + maleName[6]);
}
else if (Math.round(result) == 0 && gender === "female") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + femaleName[0]);
}
else if (Math.round(result) == 1 || Math.round(result)  ==-1 && gender === "female") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + femaleName[1]);
}
else if (Math.round(result) == 2 || Math.round(result)  ==-2 && gender === "female") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + femaleName[2]);
}
else if (Math.round(result) == 3 || Math.round(result)  ==-3 && gender === "female") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + femaleName[3]);
}
else if (Math.round(result) == 4 || Math.round(result)  ==-4 && gender === "female") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + femaleName[4]);
}
else if (Math.round(result) == 5 || Math.round(result)  ==-5 && gender === "female") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + femaleName[5]);
}
else if (Math.round(result) == 6 || Math.round(result)  ==-6 && gender === "female") {
    document.getElementById("final").innerHTML = ("Your Akan name is" + femaleName[6]);
}
else{
    alert("please input all data");
}

}




