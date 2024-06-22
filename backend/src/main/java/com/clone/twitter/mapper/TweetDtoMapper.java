package com.clone.twitter.mapper;

import com.clone.twitter.dto.TweetDto;
import com.clone.twitter.dto.UserDto;
import com.clone.twitter.model.Tweet;
import com.clone.twitter.model.User;
import com.clone.twitter.util.TweetUtil;

import java.util.ArrayList;
import java.util.List;

public class TweetDtoMapper {

    public static TweetDto toTweetDto(Tweet tweet, User reqUser) {
        UserDto user = UserDtoMapper.toUserDto(tweet.getUser());
        boolean isLiked = TweetUtil.isLikedByReqUser(reqUser, tweet);
        boolean isReTweeted = TweetUtil.isLikedByReqUser(reqUser, tweet);
        List<Long> reTweetUserId = new ArrayList<>();

        for(User user1 : tweet.getRetweetUser()){
            reTweetUserId.add(user1.getId());
        }

        TweetDto tweetDto = new TweetDto();
        tweetDto.setId(tweet.getId());
        tweetDto.setContent(tweet.getContent());
        tweetDto.setCreatedAt(tweet.getCreatedAt());
        tweetDto.setImage(tweet.getImage());
        tweetDto.setTotalLikes(tweet.getLikes().size());
        tweetDto.setTotalReplies(tweet.getReplyTweets().size());
        tweetDto.setTotalRetweets(tweet.getRetweetUser().size());
        tweetDto.setUser(user);
        tweetDto.setLiked(isLiked);
        tweetDto.setRetweet(isReTweeted);
        tweetDto.setRetweetUsersId(reTweetUserId);
        tweetDto.setReplyTweets(toTweetDtos(tweet.getReplyTweets(), reqUser));
        tweetDto.setVideo(tweet.getVideo());

        return tweetDto;
    }

    public static List<TweetDto> toTweetDtos(List<Tweet> tweets, User reqUser) {
        List<TweetDto> tweetDtos = new ArrayList<>();

        for(Tweet tweet : tweets){
            TweetDto tweetDto = toReplyTweetDto(tweet, reqUser);
            tweetDtos.add(tweetDto);
        }

        return tweetDtos;
    }

    public static TweetDto toReplyTweetDto(Tweet tweet, User reqUser) {
        UserDto user = UserDtoMapper.toUserDto(tweet.getUser());
        boolean isLiked = TweetUtil.isLikedByReqUser(reqUser, tweet);
        boolean isReTweeted = TweetUtil.isLikedByReqUser(reqUser, tweet);
        List<Long> reTweetUserId = new ArrayList<>();

        for(User user1 : tweet.getRetweetUser()){
            reTweetUserId.add(user1.getId());
        }

        TweetDto tweetDto = new TweetDto();
        tweetDto.setId(tweet.getId());
        tweetDto.setContent(tweet.getContent());
        tweetDto.setCreatedAt(tweet.getCreatedAt());
        tweetDto.setImage(tweet.getImage());
        tweetDto.setTotalLikes(tweet.getLikes().size());
        tweetDto.setTotalReplies(tweet.getReplyTweets().size());
        tweetDto.setTotalRetweets(tweet.getRetweetUser().size());
        tweetDto.setUser(user);
        tweetDto.setLiked(isLiked);
        tweetDto.setRetweet(isReTweeted);
        tweetDto.setRetweetUsersId(reTweetUserId);
        tweetDto.setVideo(tweet.getVideo());

        return tweetDto;
    }
    
}
