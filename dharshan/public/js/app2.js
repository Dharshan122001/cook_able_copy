const bill_btn = document.getElementById("bill-button");
bill_btn.addEventListener("click", () => {
  // console.log('hello');
  var xmlhttp = new XMLHttpRequest();
  var name = document.getElementById('name').value;
  var phno = document.getElementById('phone number').value;
  var addr = document.getElementById('Address').value;
  var data = {'item' : sessionStorage.item, 'name' : name, 'phno' : phno, 'addr' : addr};
  xmlhttp.open("POST", "http://127.0.0.1:8080/ordernew", true);
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.onreadystatechange = function () { //Call a function when the state changes.
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
   console.log(typeof(xmlhttp.response));               
  }
  };
  xmlhttp.send(JSON.stringify(data));
});