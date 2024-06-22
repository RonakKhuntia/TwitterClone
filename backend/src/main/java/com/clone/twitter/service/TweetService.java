package com.clone.twitter.service;

import com.clone.twitter.exception.TweetException;
import com.clone.twitter.exception.UserException;
import com.clone.twitter.model.Tweet;
import com.clone.twitter.model.User;
import com.clone.twitter.request.TweetReplyRequest;

import java.util.List;

public interface TweetService {

    public Tweet createTweet(Tweet req, User user)throws UserException;
    public List<Tweet> findAllTweet();
    public Tweet retweet(Long tweetId,User user)throws UserException, TweetException;
    public Tweet findById(Long tweetId)throws TweetException;
    public void deleteTweetById(Long tweetId,Long userId)throws UserException, TweetException;
    public Tweet removeFromRetweet(Long tweetId, User user)throws UserException, TweetException;
    public Tweet createReply(TweetReplyRequest req, User user)throws UserException, TweetException;
    public List<Tweet> getUserTweet(User user);
    public List<Tweet> findByLikesContainsUser(User user);

}
