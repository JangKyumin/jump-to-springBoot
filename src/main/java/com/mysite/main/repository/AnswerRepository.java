package com.mysite.main.repository;

import com.mysite.main.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {

    Optional<Answer> findByQuestionId(Integer questionId);
}
