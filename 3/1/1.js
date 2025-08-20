
const validUsername = "hosein";
const validPassword = "123456";



function buttom() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  console.log("inputs ", username, password);
  if (username === validUsername && password === validPassword) {
    const sugg = document.getElementById("wrong")
    sugg.innerText = "نام کاربری یا رمز عبور درست است "
    sugg.style.color = 'green';
  } else {
    const error = document.getElementById("wrong")
    error.innerText = "نام کاربری یا رمز عبور اشتباه است ❌"

  }
}
