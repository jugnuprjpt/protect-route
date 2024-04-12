import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [emailId, setEmailId] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailId == "abc@gmail.com" && pwd == 123456) {
      localStorage.setItem("login", true);
      navigate("/about");
    } else {
      setEmailId("");
      setPwd("");
      alert("please provide corrrect username & email");
    }
  };
  return (
    <>
      <div class="login-form">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div class="content">
            <div class="input-field">
              <input
                type="email"
                placeholder="Email"
                autocomplete="nope"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            <div class="input-field">
              <input
                type="password"
                placeholder="Password"
                autocomplete="new-password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            {/* <a href="#" class="link">Forgot Your Password?</a> */}
          </div>
          <div class="action">
            {/* <button>Register</button> */}
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
