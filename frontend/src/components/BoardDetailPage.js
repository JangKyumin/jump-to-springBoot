import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
    <Container>
      <h1 class="border-bottom py-2">{question.subject}</h1>
      <Card style={{ margin: 10 }}>
        <Card.Body>
          <Card.Text>{question.content}</Card.Text>
          <div class="d-flex justify-content-end">
            <Badge bg="light" text="dark">
              {question.createDate}
            </Badge>
          </div>
        </Card.Body>
      </Card>

      <h5 class="border-bottom my-3 py-2">
        {question.answerList ? question.answerList.length : 0}개의 답변이
        있습니다.
      </h5>

      {question.answerList &&
        question.answerList.map((answer, index) => (
          <Card style={{ margin: 10 }}>
            <Card.Body>
              <Card.Text>{answer.content}</Card.Text>
              <div class="d-flex justify-content-end">
                <Badge bg="light" text="dark">
                  {question.createDate}
                </Badge>
              </div>
            </Card.Body>
          </Card>
        ))}

      <Form method="post">
        <Form.Control
          as="textarea"
          rows={15}
          name="content"
          id="content"
          value={content}
          onChange={handleChange}
        />
        <Button
          variant="secondary"
          onClick={onSubmitHandler}
          style={{ marginTop: 10 }}
        >
          {"답변등록"}
        </Button>
      </Form>
    </Container>
  );
}

export default BoardDetailPage;
