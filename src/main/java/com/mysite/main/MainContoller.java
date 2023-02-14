package com.mysite.main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainContoller {

    @GetMapping("/")
    public String index() {
        return "redirect:/question/list";
    }
}
