import React, { useState, useEffect } from "react";
import RenderQuestion from "./RenderQuestion";

const Question = ({ questions }: any) => {
  const [quizQuestions, setQuizQuestions] = useState({ quizQuestions: [] });
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(questions);

  useEffect(() => {
    const clonedQuestions = questions;
    for (let i = 0; i < clonedQuestions.length; i++) {
      const question = clonedQuestions[i];
      question.answers = [
        ...question.incorrect_answers,
        question.correct_answer,
      ];
      const answer = question.correct_answer;
      console.log("answer", answer);
    }
    setQuizQuestions({ quizQuestions: clonedQuestions });
    console.log("quizquestions", quizQuestions);
  }, [questions]);

  return (
    <div className="container">
      {Object.keys(quizQuestions).length > 0 ? (
        <div
          className="container"
          style={{
            backgroundColor: "#efeff1",
            margin: "10px",
            width: "90%",
            padding: "15px",
          }}
        >
          {quizQuestions.quizQuestions.map((ele, index: any) => {
            return (
              <div style={{ padding: "5px", marginLeft: "25px" }}>
                <RenderQuestion ele={ele} index={index} />
                <br />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Question;
