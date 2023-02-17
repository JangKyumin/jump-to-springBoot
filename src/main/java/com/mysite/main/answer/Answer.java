package com.mysite.main.answer;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mysite.main.question.Question;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime createDate;

    @ManyToOne
    @JoinColumn(name = "question_id")
    @JsonIgnore // 순환 참조 관계 문제로 추가
    private Question question;
}
