const form = document.getElementById('signin-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('https://mock-server-6-6ljm.onrender.com/users')
    .then((response) => response.json())
    .then((users) => {
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        alert('Login successful');
        window.location.href = 'home.html';
      } else {
        alert('Login failed');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
