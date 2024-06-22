package com.clone.twitter.service;

import com.clone.twitter.exception.TweetException;
import com.clone.twitter.exception.UserException;
import com.clone.twitter.model.Like;
import com.clone.twitter.model.Tweet;
import com.clone.twitter.model.User;
import com.clone.twitter.repository.LikeRepository;
import com.clone.twitter.repository.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeServiceImplementation implements LikeService{

    @Autowired
    private LikeRepository likeRepository;
    @Autowired
    private TweetService tweetService;
    @Autowired
    private TweetRepository tweetRepository;

    @Override
    public Like likeTweet(Long tweetId, User user) throws UserException, TweetException {
        Like isLikeExists = likeRepository.isLikeExists(user.getId(),tweetId);
        if(isLikeExists != null){
            likeRepository.deleteById(isLikeExists.getId());
            return isLikeExists;
        }
        Tweet tweet = tweetService.findById(tweetId);
        Like like = new Like();
        like.setTweet(tweet);
        like.setUser(user);
        Like savedLike = likeRepository.save(like);
        tweet.getLikes().add(savedLike);
        tweetRepository.save(tweet);
        return savedLike;
    }

    @Override
    public List<Like> getAllLikes(Long tweetId) throws TweetException {
        Tweet tweet = tweetService.findById(tweetId);
        List<Like> likes = likeRepository.findByTweetId(tweetId);
        return likes;
    }
}
