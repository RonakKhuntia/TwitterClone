package com.clone.twitter.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="tweet_likes")
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Tweet tweet;

}
