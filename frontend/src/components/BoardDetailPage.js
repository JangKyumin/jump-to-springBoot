import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function BoardDetailPage() {
  const location = useLocation();
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get("/question/detail/" + location.state)
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((error) => console.log(error));
  }, [location]);

  function handleChange(e) {
    setContent(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    axios
      .post("/answer/create/" + location.state, {
        content: content,
      })
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h1>{question.subject}</h1>
      <div>{question.content}</div>
      <h5>
        {question.answerList ? question.answerList.length : 0}개의 답변이
        있습니다.
      </h5>
      <div>
        {question.answerList &&
          question.answerList.map((answer, index) => (
            <ul key={answer.id}>
              <li>{answer.content}</li>
            </ul>
          ))}
      </div>

      <form method="post">
        <textarea
          name="content"
          id="content"
          rows="15"
          value={content}
          onChange={handleChange}
        />
        <button type="button" onClick={onSubmitHandler}>
          답변등록
        </button>
      </form>
    </div>
  );
}

export default BoardDetailPage;
