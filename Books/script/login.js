async function login() {
  let loginDataObj = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  let res = await fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(loginDataObj),
    headers: { "Content-Type": "application/json" },
  });

  let data = res.json();

  if (data.token) {
    alert("Login Success!");
  } else {
    alert("Login Failure!");
  }
}
