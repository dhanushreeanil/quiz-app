import React from "react";
import { Button, TextField, Checkbox } from "@material-ui/core";
import Question from "./Question";

const RenderQuestion = ({ ele, index }: any) => {
  return (
    <div style={{ padding: "5px", marginLeft: "25px", marginBlock: "25px" }}>
      <div style={{ textAlign: "left" }}>
        {" "}
        {index + 1}. {ele.question}{" "}
      </div>
      <br />
      {ele.answers.map((ele1: any) => {
        return (
          <div
            style={{
              textAlign: "left",
              marginLeft: "50px",
              padding: "3px",
            }}
            key={ele1}
          >
            <label>
              <input type="checkbox" /> {ele1}
            </label>
            <br />
          </div>
        );
      })}
      <div style={{ margin: "20px", width: "90%" }}>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          style={{ float: "left", display: "block" }}
        >
          Previous
        </Button>{" "}
        <Button
          size="medium"
          variant="contained"
          color="primary"
          style={{ float: "right", display: "block" }}
        >
          Next
        </Button>{" "}
      </div>
    </div>
  );
};

export default RenderQuestion;
