import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BoardPage() {
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
                  <Link to="/detail" state={question.id}>
                    {question.subject}
                  </Link>
                </td>
                <td>{question.createDate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardPage;
