package com.clone.twitter.util;

import com.clone.twitter.model.User;

public class UserUtil {

    public static boolean isReqUser(User reqUser, User user){
        return reqUser.getId().equals(user.getId());
    }

    public static boolean isFollowedByReqUser(User reqUser,User user){
        return reqUser.getFollowing().contains(user);
    }
}
