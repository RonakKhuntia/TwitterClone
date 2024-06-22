package com.clone.twitter.service;

import com.clone.twitter.exception.TweetException;
import com.clone.twitter.exception.UserException;
import com.clone.twitter.model.Like;
import com.clone.twitter.model.User;

import java.util.List;

public interface LikeService {

    public Like LikeTweet(Long tweetId, User user) throws UserException, TweetException;
    public List<Like> getAllLikes(Long tweetId) throws TweetException;

}
