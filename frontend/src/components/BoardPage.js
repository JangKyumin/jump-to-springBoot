import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";

function BoardPage() {
  const [questionList, setQuestionList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/question/list")
      .then((response) => {
        setQuestionList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Table striped bordered hover className="my-3">
        <thead className="table-dark">
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody>
          {questionList &&
            questionList.map((question, index) => (
              <tr key={question.id}>
                <td>{index}</td>
                <td>
                  <a
                    href={""}
                    onClick={() => {
                      navigate("/detail", {
                        state: { questionId: question.id },
                      });
                    }}
                  >
                    {question.subject}
                  </a>
                </td>
                <td>{question.createDate}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button
        variant="primary"
        style={{ marginTop: 10 }}
        onClick={() => {
          navigate("/create");
        }}
      >
        질문 등록하기
      </Button>
    </Container>
  );
}

export default BoardPage;
