package com.mysite.main.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainContoller {

    @GetMapping("/")
    public String index() {
        return "test 입니다";
    }
}
