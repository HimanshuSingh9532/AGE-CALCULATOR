let year =document.getElementById("year");
let month =document.getElementById("month");
let day =document.getElementById("day");
 
let Allmonths = ["JAN","FEB","MAR","APR","MAY"]
let date = new Date();
console.log(date.getFullYear)
year.innerHTML = date.getFullYear();
month.innerHTML = Allmonths[date.getMonth()];
day.innerHTML = date.getDate();