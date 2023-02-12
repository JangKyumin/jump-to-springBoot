package com.mysite.main.answer;

import com.mysite.main.answer.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {

    Optional<Answer> findByQuestionId(Integer questionId);
}
