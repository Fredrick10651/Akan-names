function myButton() {
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var year = document.getElementById("year").value;
    var yy = parseInt(year.toString().slice(2, 4));
    var cc = year.slice(0, 2);

    var results = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
  
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (document.getElementById("gender").checked) {
      var gender = 'male';
    }
    else {
      var gender = 'female';
    }
    if (dd <= 0 || dd > 31) {
      alert("invalid date");
    }
    else if (mm <= 0 || mm > 12) {
      alert("invalid month");
    }
    else if (mm == 2 && dd > 29) {
      alert("invalid day of month")
    }
    else if (Math.round(results) == 0 && gender === 'male') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + maleNames[0]);
    }
    else if (Math.round(results) == 1 || Math.round(results) == -1 && gender === 'male') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + maleNames[1]);
    }
    else if (Math.round(results) == 2 || Math.round(results) == -2 && gender === 'male') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + maleNames[2]);
    }
    else if (Math.round(results) == 3 || Math.round(results) == -3 && gender === 'male') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + maleNames[3]);
    }
    else if (Math.round(results) == 4 || Math.round(results) == -4 && gender === 'male') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + maleNames[4]);
    }
    else if (Math.round(results) == 5 || Math.round(results) == -5 && gender === 'male') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + maleNames[5]);
    }
    else if (Math.round(results) == 6 || Math.round(results) == -6 && gender === 'male') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + maleNames[6]);
    }
    else if (Math.round(results) == 0 && gender === 'female') {
      document.getElementById("answer").innerHTML = ("Your Akan name is " + femaleNames[0]);
    }
    else if (Math.round(results) == 1 || Math.round(results) == -1 && gender === 'female') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + femaleNames[1]);
    }
    else if (Math.round(results) == 2 || Math.round(results) == -2 && gender === 'female') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + femaleNames[2]);
    }
    else if (Math.round(results) == 3 || Math.round(results) == -3 && gender === 'female') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + femaleNames[3]);
    }
    else if (Math.round(results) == 4 || Math.round(results) == -4 && gender === 'female') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + femaleNames[4]);
    }
    else if (Math.round(results) == 5 || Math.round(results) == -5 && gender === 'female') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + femaleNames[5]);
    }
    else if (Math.round(results) == 6 || Math.round(results) == -6 && gender === 'female') {
      document.getElementById("answer").innerHTML = ("Your Akan Name is " + femaleNames[6]);
    }
    else {
      alert("please input all data");
    }
  
  }




