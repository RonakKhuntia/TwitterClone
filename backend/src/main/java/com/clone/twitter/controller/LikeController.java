package com.clone.twitter.controller;

import com.clone.twitter.dto.LikeDto;
import com.clone.twitter.exception.TweetException;
import com.clone.twitter.exception.UserException;
import com.clone.twitter.mapper.LikeDtoMapper;
import com.clone.twitter.model.Like;
import com.clone.twitter.model.User;
import com.clone.twitter.service.LikeService;
import com.clone.twitter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LikeController {

    @Autowired
    private UserService userService;
    @Autowired
    private LikeService likeService;

    @PostMapping("/{tweetid}/likes")
    public ResponseEntity<LikeDto> likeTweet(@PathVariable Long tweetId,
                                             @RequestHeader("Authorization") String jwt)
                                             throws UserException, TweetException {
        User user = userService.findUserProfileByJwt(jwt);
        Like like = likeService.likeTweet(tweetId,user);
        LikeDto likeDto = LikeDtoMapper.toLikeDto(like,user);
        return new ResponseEntity<>(likeDto, HttpStatus.CREATED);
    }

    @PostMapping("/tweet/{tweetid}")
    public ResponseEntity<List<LikeDto>> getAllLikes(@PathVariable Long tweetId,
                                                     @RequestHeader("Authorization") String jwt)
                                                throws UserException, TweetException {
        User user = userService.findUserProfileByJwt(jwt);
        List<Like> like = likeService.getAllLikes(tweetId);
        List<LikeDto> likeDtos = LikeDtoMapper.toLikeDtos(like,user);
        return new ResponseEntity<>(likeDtos, HttpStatus.CREATED);
    }
}
