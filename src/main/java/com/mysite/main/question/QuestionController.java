package com.mysite.main.question;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/question")
@RestController
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/list")
    public List<Question> list() {
        return this.questionService.getList();
    }

    @GetMapping(value = "/detail/{id}")
    public Question detail(@PathVariable("id") Integer id) {
        return this.questionService.getQuestion(id);
    }
}