package com.clone.twitter.util;

import com.clone.twitter.model.Like;
import com.clone.twitter.model.Tweet;
import com.clone.twitter.model.User;

public class TweetUtil {

    public static boolean isLikedByReqUser(User reqUser, Tweet tweet){
        for(Like like : tweet.getLikes()){
            if(like.getUser().getId().equals(reqUser.getId())){
                return true;
            }
        }
        return false;
    }

    public static boolean isRetweetedByReqUser(User reqUser, Tweet tweet){
        for(User user : tweet.getRetweetUser()){
            if(user.getId().equals(reqUser.getId())){
                return true;
            }
        }
        return false;
    }
}
