package com.clone.twitter.mapper;

import com.clone.twitter.dto.LikeDto;
import com.clone.twitter.dto.TweetDto;
import com.clone.twitter.dto.UserDto;
import com.clone.twitter.model.Like;
import com.clone.twitter.model.User;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class LikeDtoMapper {

    public static LikeDto toLikeDto(Like like, User reqUser) {
        UserDto user = UserDtoMapper.toUserDto(like.getUser());
        UserDto reqUserDto = UserDtoMapper.toUserDto(reqUser);
        TweetDto tweet = TweetDtoMapper.toTweetDto(like.getTweet(), reqUser);
        LikeDto likeDto = new LikeDto();
        likeDto.setId(like.getId());
        likeDto.setTweet(tweet);
        likeDto.setUser(user);
        return likeDto;
    }

    public static List<LikeDto> toLikeDtos(List<Like> likes, User reqUser) {
        List<LikeDto> likeDtos = new ArrayList<>();

        for(Like like : likes){
            UserDto user = UserDtoMapper.toUserDto(like.getUser());
            TweetDto tweet = TweetDtoMapper.toTweetDto(like.getTweet(), reqUser);
            LikeDto likeDto = new LikeDto();
            likeDto.setId(like.getId());
            likeDto.setTweet(tweet);
            likeDto.setUser(user);
            likeDtos.add(likeDto);
        }

        return likeDtos;
    }
}
