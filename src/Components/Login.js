import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Login;
