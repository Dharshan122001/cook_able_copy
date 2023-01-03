const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

// const links = getElement('.nav-links')
// const navBtnDOM = getElement('.nav-btn') 

// navBtnDOM.addEventListener('click', () => {
  // links.classList.toggle('show-links')
// })

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear

const bill_btn = document.getElementById("bill-button");
bill_btn.addEventListener("click", () => {
  // console.log('hello');
  var xmlhttp = new XMLHttpRequest();
  var name = document.getElementById('name').value;
  var phno = document.getElementById('phone number').value;
  var data = {'item' : sessionStorage.item, 'name' : name, 'phno' : phno};
  xmlhttp.open("POST", "http://127.0.0.1:8080/order", true);
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.onreadystatechange = function () { //Call a function when the state changes.
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
   console.log(JSON.parse(xmlhttp.responseText));               
  }
  };
  xmlhttp.send(JSON.stringify(data));
});