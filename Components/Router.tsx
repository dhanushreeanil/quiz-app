import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import CONSTANT from "./Constant";
import FourZeroFour from "./Error/FourZeroFour";
import Home from "./Home";
import Question from "./Question";
import Result from "./Result";
import Start from "./Start";

const Router = (props: any) => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async (category: string, difficulty: string) => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}`
      )
      .then((response) => {
        const result = response.data.results;
        setQuestions(result);
      })
      .catch((err) => {
        const error = err.message;
        alert(error);
      });
  };
  return (
    <Switch>
      <Route
        exact={true}
        path={CONSTANT.url.home}
        render={(props: any) => (
          <Home {...props} fetchQuestions={fetchQuestions} />
        )}
      />
      {questions.length > 0 && (
        <Route
          exact={true}
          path={CONSTANT.url.question}
          render={(props: any) => <Question {...props} questions={questions} />}
        />
      )}
      <Route exact={true} path={CONSTANT.url.start} component={Start} />
      <Route exact={true} path={CONSTANT.url.result} component={Result} />
      <Route component={FourZeroFour} />
    </Switch>
  );
};

export default Router;
