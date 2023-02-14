import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";

function App() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    axios
      .get("/question/list")
      .then((response) => {
        setQuestionList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody>
          {questionList &&
            questionList.map((question, index) => (
              <tr key={question.id}>
                <td>
                  <a href={"/question/detail/" + question.id}>
                    {question.subject}
                  </a>
                </td>
                <td>{question.createDate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
