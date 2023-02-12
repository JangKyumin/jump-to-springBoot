package com.mysite.main;

import com.mysite.main.entity.Answer;
import com.mysite.main.entity.Question;
import com.mysite.main.repository.AnswerRepository;
import com.mysite.main.repository.QuestionRepository;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class MainApplicationTests {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private AnswerRepository answerRepository;

    @Test
    @Order(0)
    void testBefore() {
        Question q1 = new Question();
        q1.setSubject("sbb가 무엇인가요?");
        q1.setContent("sbb에 대해서 알고 싶습니다.");
        q1.setCreateDate(LocalDateTime.now());
        this.questionRepository.save(q1);  // 첫번째 질문 저장

        Question q2 = new Question();
        q2.setSubject("스프링부트 모델 질문입니다.");
        q2.setContent("id는 자동으로 생성되나요?");
        q2.setCreateDate(LocalDateTime.now());
        this.questionRepository.save(q2);  // 두번째 질문 저장
    }

    @Test
    @Order(1)
    void testFindAll() {
        List<Question> all = this.questionRepository.findAll();
        assertEquals(2, all.size());

        Question q = all.get(0);
        assertEquals("sbb가 무엇인가요?", q.getSubject());
    }

    @Test
    @Order(2)
    void testFindById() {
        Optional<Question> oq = this.questionRepository.findById(1);

        if (oq.isPresent()) {
            Question q = oq.get();
            assertEquals("sbb가 무엇인가요?", q.getSubject());
        }
    }

    @Test
    @Order(3)
    void testFindBySubject() {
        Question question = this.questionRepository.findBySubject("sbb가 무엇인가요?");
        assertEquals("sbb가 무엇인가요?", question.getSubject());
    }

    @Test
    @Order(4)
    void testFindBySubjectAndContent() {
        Question question = this.questionRepository.findBySubjectAndContent("sbb가 무엇인가요?", "sbb에 대해서 알고 싶습니다.");
        assertEquals("sbb가 무엇인가요?", question.getSubject());
    }

    @Test
    @Order(5)
    void testFindBySubjectLike() {
        List<Question> qList = this.questionRepository.findBySubjectLike("sbb%");
        Question q = qList.get(0);
        assertEquals("sbb가 무엇인가요?", q.getSubject());
    }

    @Test
    @Order(6)
    void testQuestUpdate() {
        List<Question> oqList = this.questionRepository.findAll();
        Question q = oqList.get(0);
        q.setSubject("수정된 제목");
        this.questionRepository.save(q);
    }

    @Test
    @Order(7)
    void testAnswerCreate() {
        List<Question> oqList = this.questionRepository.findAll();
        Question q = oqList.get(0);

        Answer a = new Answer();
        a.setContent("네 자동으로 생성됩니다.");
        a.setQuestion(q);  // 어떤 질문의 답변인지 알기위해서 Question 객체가 필요하다.
        a.setCreateDate(LocalDateTime.now());
        this.answerRepository.save(a);
    }

    @Test
    @Order(8)
    void testAnswerSelect() {
        List<Question> oqList = this.questionRepository.findAll();
        Question q = oqList.get(0);

        Optional<Answer> oa = this.answerRepository.findByQuestionId(q.getId());
        assertTrue(oa.isPresent());
        Answer a = oa.get();
        assertEquals(q.getId(), a.getQuestion().getId());
    }

    @Test
    @Order(9)
    @Transactional
    void testQuestionAnswer() {
        List<Question> oqList = this.questionRepository.findAll();
        Question q1 = oqList.get(0);

        Optional<Question> oq = this.questionRepository.findById(q1.getId());
        assertTrue(oq.isPresent());
        Question q2 = oq.get();

        List<Answer> answerList = q2.getAnswerList();

        assertEquals(1, answerList.size());
        assertEquals("네 자동으로 생성됩니다.", answerList.get(0).getContent());
    }

    @Test
    @Order(10)
    void testAfter() {
        assertEquals(2, this.questionRepository.count());
        List<Question> oqList = this.questionRepository.findAll();
        assertEquals(2, oqList.size());
        this.questionRepository.deleteAll();
        assertEquals(0, this.questionRepository.count());
    }

}
