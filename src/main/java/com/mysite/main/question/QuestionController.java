package com.mysite.main.question;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class QuestionController {

    private final QuestionRepository questionRepository;

    @GetMapping("/question/list")
    public List<Question> list() {
        return this.questionRepository.findAll();
    }
}