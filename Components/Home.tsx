import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Button, MenuItem } from "@material-ui/core";
import Categories from "./Categories";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./Error/ErrorMessage";
import Question from "./Question";

const Home = ({ fetchQuestions }: any) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState({
    name: "",
    category: "",
    difficulty: "",
  });

  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    console.log("user", user);
    if (!user.name || !user.category || !user.difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(user.category, user.difficulty);
      history.push("/question");
    }
  };

  return (
    <div>
      <h2> Quiz Settings </h2>
      {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
      <TextField
        size="small"
        label="Enter your Name"
        variant="outlined"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        style={{ marginBottom: 30, width: "30%" }}
      />
      <br />
      <TextField
        size="small"
        select
        label="Select Catergory"
        variant="outlined"
        value={user.category}
        onChange={(e) => {
          setUser({ ...user, category: e.target.value });
        }}
        style={{ marginBottom: 30, width: "30%" }}
      >
        {Categories.map((ele) => {
          return (
            <MenuItem key={ele.category} value={ele.value}>
              {ele.category}
            </MenuItem>
          );
        })}
      </TextField>
      <br />
      <TextField
        size="small"
        select
        label="Select Difficulty"
        variant="outlined"
        value={user.difficulty}
        onChange={(e) => {
          setUser({ ...user, difficulty: e.target.value });
        }}
        style={{ marginBottom: 30, width: "30%" }}
      >
        <MenuItem key="easy" value="easy">
          Easy
        </MenuItem>
        <MenuItem key="medium" value="medium">
          Medium
        </MenuItem>
        <MenuItem key="hard" value="hard">
          Hard
        </MenuItem>
      </TextField>
      <br />
      <Button
        size="medium"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Start Quiz
      </Button>{" "}
      {/* {isSubmitted ? <Question fetchQuestions={fetchQuestions} /> : null} */}
    </div>
  );
};

export default Home;
