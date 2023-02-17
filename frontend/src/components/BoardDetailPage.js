import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function BoardDetailPage() {
  const location = useLocation();
  const [question, setQuestion] = useState("");

  useEffect(() => {
    axios
      .get("/question/detail/" + location.state + "")
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>{question.subject}</h1>
      <div>{question.content}</div>
    </div>
  );
}

export default BoardDetailPage;
