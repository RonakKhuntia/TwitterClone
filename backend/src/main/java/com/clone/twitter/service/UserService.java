package com.clone.twitter.service;

import com.clone.twitter.exception.UserException;
import com.clone.twitter.model.User;

import java.util.List;

public interface UserService {

    public User findUserbyId(Long userId) throws UserException;
    public User findUserProfileByJwt(String jwt) throws UserException;
    public User updateUser(Long userId, User user) throws UserException;
    public User followUser(Long userId, User user)throws UserException;
    public List<User> searchUser(String query);
}
