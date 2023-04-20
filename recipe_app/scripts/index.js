const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = {
    username,
    email,
    password,
  };

  fetch('https://mock-server-6-6ljm.onrender.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(() => {
      alert('register  successful');
      window.location.href = "signin.html"
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
