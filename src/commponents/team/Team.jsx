import { fontFamily } from "@mui/system";
import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <div className="team">
      <div className="container-fluid d-flex align-items-center justify-content-center">
        <div>
          <h1
            style={{
              marginTop: "25rem",
              color: "#343434",
              fontWeight: "700",
              fontSize: "4rem",
            }}
          >
            Join The Team
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Team;
