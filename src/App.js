import "./App.css";
import Login from "./commponents/login/Login";
import Team from "./commponents/team/Team";
import { useState } from "react";

function App() {
  const users = [
    {
      email: "admin1@admin.com",
      password: "admin1",
    },
    {
      email: "admin2@admin.com",
      password: "admin2",
    },

    {
      email: "admin3@admin.com",
      password: "admin3",
    },
    {
      email: "admin4@admin.com",
      password: "admin4",
    },
    {
      email: "admin5@admin.com",
      password: "admin5",
    },
  ];

  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);

    for (var i = 0; i < users.length; i++) {
      if (
        users[i].email === details.email &&
        users[i].password === details.password
      ) {
        console.log("login success");
        setUser({
          name: details.name,
          email: details.email,
        });
        setError("");
        return;
      } else {
        console.log("login failed");
        setError("login failed");
      }
    }
  };

  const logout = () => {
    console.log("logout");
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div className="app">
      {user.email != "" ? (
        <div className="welcome mt-5">
          <div className="container-fluid">
            <div className="welcomee d-grid gap-5 justify-content-center">
              <h1>
                Welcome <span>{user.name}</span>
              </h1>
              <div>
                <button
                  style={{
                    height: "4rem",
                    backgroundColor: "#39f79e",
                    borderRadius: "0.5rem",
                  }}
                  onClick={logout}
                  className="btn"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <Login Login={login} error={error} />
            </div>
            <div className="col-md-8">
              <Team />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
