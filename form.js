function checkCorrectValue(id){
  var element = document.getElementById(id);
  var value = element.value;

  if (value === '') {
    element.style.border = "1px solid red";
    console.log('Поле обязательно для заполнения!');
    return false;
  } else {
    element.style.border = "1px solid #1700A6";
    return true;
  }
}

function Validation(event) {
  event.preventDefault();

  var isCorrectLogin = checkCorrectValue("login");
  var isCorrectEmail = checkCorrectValue("email");

  if (isCorrectLogin && isCorrectEmail){
  	var form = document.getElementById("form");
    form.style.display = "none";

  	var successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
  }

}


var signButton = document.getElementById("button");
signButton.addEventListener('click', Validation);