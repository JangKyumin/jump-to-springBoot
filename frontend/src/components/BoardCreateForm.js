import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import ErrorAlert from "./ErrorAlert";

function BoardCreateForm() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState("");

  function subjectChange(e) {
    setSubject(e.target.value);
  }

  function contentChange(e) {
    setContent(e.target.value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    axios
      .post("/question/create", {
        subject: subject,
        content: content,
      })
      .then((response) => {
        if (response.data === "success") {
          navigate("/");
        } else {
          setErrors(response.data);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <Container>
      <h5 className="my-3 border-bottom pb-2">질문등록</h5>
      <Form method="post">
        <ErrorAlert errors={errors} />

        <Form.Group className="mb-3">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={subjectChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            name="content"
            id="content"
            value={content}
            onChange={contentChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={onSubmitHandler}
          style={{ marginTop: 10 }}
        >
          {"저장하기"}
        </Button>
      </Form>
    </Container>
  );
}

export default BoardCreateForm;
