package com.mysite.main.question;

import com.mysite.main.answer.Answer;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
public class Question {
    /**
     * [ 어노테이션 설명 ]
     * Id : 기본키를 의미한다.
     * GeneratedValue : 속성에 값을 따로 세팅하지 않아도 1씩 자동으로 증가하여 저장한다.
     * - GenerationType.IDENTITY는 해당 컬럼만의 독립적인 시퀀스를 생성하여 번호를 증가시킬 때 사용한다.
     * Column : 컬럼의 세부 설정을 위해 사용한다.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 200)
    private String subject;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime createDate;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answerList;
}
