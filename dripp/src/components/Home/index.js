import React from "react";

function Home(props) {
  return (
    <div class="home">
      <form action="action_page.php" method="post">
        <label>Username:</label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default Home;
