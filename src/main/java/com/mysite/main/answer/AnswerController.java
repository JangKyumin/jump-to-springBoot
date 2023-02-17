package com.mysite.main.answer;

import com.mysite.main.question.Question;
import com.mysite.main.question.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RequestMapping("/answer")
@RequiredArgsConstructor
@RestController
public class AnswerController {

    private final QuestionService questionService;
    private final AnswerService answerService;

    @PostMapping("/create/{id}")
    public Question createAnswer(@PathVariable("id") Integer id, @RequestBody HashMap<String, Object> param) {
        Question question = this.questionService.getQuestion(id);
        this.answerService.create(question, param.get("content").toString());
        return question;
    }
}