async function register() {
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

  alert("Register success!");
  console.log(data);
  window.location.href = "./../admin.html";
}
