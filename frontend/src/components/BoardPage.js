import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Table, Button, Pagination } from "react-bootstrap";

function BoardPage() {
  const [paging, setPaging] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/question/list?page=1")
      .then((response) => {
        console.log(response.data);
        setPaging(response.data);
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
          {paging.content &&
            paging.content.map((question, index) => (
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

      {!paging.empty && (
        <div>
          <Pagination className="justify-content-center">
            {paging.content &&
              paging.content.map((question, index) => (
                <Pagination.Item key={index} active={index === 2}>
                  {index}
                </Pagination.Item>
              ))}
          </Pagination>
        </div>
      )}

      {/* <div th:if="${!paging.isEmpty()}">
        <ul class="pagination justify-content-center">
          <li
            class="page-item"
            th:classappend="${!paging.hasPrevious} ? 'disabled'"
          >
            <a class="page-link" th:href="@{|?page=${paging.number-1}|}">
              <span>이전</span>
            </a>
          </li>
          <li
            th:each="page: ${#numbers.sequence(0, paging.totalPages-1)}"
            th:classappend="${page == paging.number} ? 'active'"
            class="page-item"
          >
            <a
              th:text="${page}"
              class="page-link"
              th:href="@{|?page=${page}|}"
            ></a>
          </li>
          <li
            class="page-item"
            th:classappend="${!paging.hasNext} ? 'disabled'"
          >
            <a class="page-link" th:href="@{|?page=${paging.number+1}|}">
              <span>다음</span>
            </a>
          </li>
        </ul>
      </div> */}

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
