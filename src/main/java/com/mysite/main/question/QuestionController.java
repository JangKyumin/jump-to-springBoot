package com.mysite.main.question;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("/question")
@RestController
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/list")
    public Page<Question> list(@RequestParam(value = "page", defaultValue = "0") int page) {
        return this.questionService.getList(page);
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