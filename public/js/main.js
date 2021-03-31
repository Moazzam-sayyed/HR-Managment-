function main()
{
  var name = document.getElementById("studname").innerHTML;
  let setName = window.localStorage.setItem("STUDENT-NAME",name);
  var std = document.getElementById("std").value;
  let setStd = window.localStorage.setItem("STANDARD",std);
  var dob = document.getElementById("studDOB").innerHTML;
  let setdob = window.localStorage.setItem("DOB",dob);
  console(localStorage);
}







  
  