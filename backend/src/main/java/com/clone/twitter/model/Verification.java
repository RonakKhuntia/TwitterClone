package com.clone.twitter.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Verification {

    private boolean status = false;

    private LocalDateTime startDateTime;

    private LocalDateTime endDateTime;

    private String planType;

}
