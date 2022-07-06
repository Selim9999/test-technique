import React, { useState } from "react";
import "./Login.css";
import HomeIcon from "@mui/icons-material/Home";
import { Height } from "@material-ui/icons";
import { ReactComponent as Svg } from "../../images/Rectangle.svg";

const Login = ({ Login, error }) => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="login">
      <div className="container-fluid">
        <div className="head d-grid gap-1 justify-content-center">
          <div className="icon mt-5 ms-4 height-100">
            <Svg />
          </div>
          <div
            style={{ color: "#f7003a", fontWeight: "revert" }}
            className="title d-flex gap-2 ms-3"
          >
            <h1
              style={{
                fontWeight: "700",
                color: "#ff8d8d",
              }}
            >
              Eli
            </h1>
            <h1
              style={{
                fontWeight: "350",
                fontSize: "1.5rem",
                transform: "translateY(1rem)",
                color: "#b7e6d8",
              }}
            >
              Codes
            </h1>
          </div>
        </div>
        <div className="form">
          <div>
            <h2
              style={{ fontWeight: "700", color: "#666666" }}
              className="sign-up mt-5 mb-5 text-center"
            >
              Sign in
            </h2>
          </div>
          <form
            onSubmit={submitHandler}
            className="d-grid gap-4 justify-content-center"
          >
            <div className="d-flex gap-2">
              <input
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
                type="name"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Name"
                style={{
                  height: "4rem",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "0.5rem",
                }}
              ></input>
              <div
                style={{
                  backgroundColor: "#70edb9",
                }}
                className="dot mt-4"
              ></div>
            </div>
            <div className="d-flex gap-2">
              <input
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
                type="email"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Email"
                style={{
                  height: "4rem",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "0.5rem",
                }}
              ></input>
              <div
                style={{
                  backgroundColor: "#ffa689",
                }}
                className="dot mt-4"
              ></div>
            </div>
            <div className="d-flex gap-2">
              <input
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
                type="password"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Password"
                style={{
                  height: "4rem",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "0.5rem",
                }}
              ></input>
              <div
                style={{
                  backgroundColor: "#ee2f75",
                }}
                className="dot mt-4"
              ></div>
            </div>
            <div>
              <button
                style={{
                  height: "4rem",
                  backgroundColor: "#70edb9",
                  color: "#edfdf6",
                  borderRadius: "0.5rem",
                  width: "92%",
                }}
                type="submit"
                className="btn"
              >
                Sign in
              </button>
            </div>
          </form>
          <div>
            <p style={{ fontWeight: "200" }} className="text-center mt-5">
              By signing up, I agree to the Privacy Policy and Terms of Service
            </p>
            <div className="d-flex gap-1 justify-content-center">
              <p style={{ fontWeight: "500" }}>Don't have an account?</p>
              <p style={{ fontWeight: "500", color: "#ff8d8d" }}>Sign up</p>
            </div>
          </div>
          {error != "" ? (
            <div style={{ color: "red" }} className="error text-center">
              <h2
                style={{
                  fontWeight: "700",
                  color: "#ff4a6c",
                }}
              >
                {error}
              </h2>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
