package com.mysite.main.answer;

import com.mysite.main.question.Question;
import com.mysite.main.question.QuestionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/answer")
@RequiredArgsConstructor
@RestController
public class AnswerController {

    private final QuestionService questionService;
    private final AnswerService answerService;

    @PostMapping("/create/{id}")
    public Object createAnswer(@PathVariable("id") Integer id, @RequestBody @Valid AnswerForm answerForm, BindingResult bindingResult) {
        Question question = this.questionService.getQuestion(id);
        if (bindingResult.hasErrors()) {
            return bindingResult.getAllErrors();
        }
        this.answerService.create(question, answerForm.getContent());
        return question;
    }
}