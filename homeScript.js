<div>
  <form action="#" method="post">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" name="username" />
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" />
    <button type="submit" id="login-button">Login</button>
    <p id="error-message" style={{ display: 'none', color: 'red' }}>Incorrect username or password</p>
  </form>

  <script>
    document.getElementById('login-button').addEventListener('click', function(event) {
      event.preventDefault() }
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      if (username === 'admin' && password === 'password') {
        // correct username and password
        window.location.href = 'page2.html' // navigate to page 2
      } else {
        // incorrect username or password
        document.getElementById('error-message').style.display = 'block' // display the error message
      }
      return false; // prevent the form from being submitted
    );
  </script>
</div>
