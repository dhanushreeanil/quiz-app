import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CONSTANT from "./Constant";
import { Grid, Button } from "@material-ui/core";

const Start = (props: any) => {
  useEffect(() => {
    document.title = "Quiz Instructions";
    localStorage.removeItem(CONSTANT.key.answerSheet);
  });

  return (
    <>
      <div
        style={{
          backgroundColor: "#efeff1",
          margin: "15px",
          width: "90%",
          padding: "10px",
        }}
      >
        <h3>Please Read the instructions Carefully before you continue</h3>
        <ul style={{ display: "block", listStyle: "none" }}>
          <li> Instruction 1 </li>
          <li> Instruction 2 </li>
          <li> Instruction 3 </li>
        </ul>
      </div>
      <div style={{ margin: "20px", width: "90%" }}>
        <Link to="/start">
          {" "}
          <Button
            size="medium"
            variant="contained"
            color="primary"
            style={{ float: "right" }}
          >
            Next
          </Button>{" "}
        </Link>
      </div>
    </>
  );
};

export default Start;
