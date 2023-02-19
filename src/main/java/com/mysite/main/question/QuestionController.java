package com.mysite.main.question;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/create")
    public Object questionCreate(@RequestBody @Valid QuestionForm questionForm, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return bindingResult.getAllErrors();
        }
        this.questionService.create(questionForm.getSubject(), questionForm.getContent());
        return "success";
    }
}