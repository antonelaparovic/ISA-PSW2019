package com.service;

import com.model.User;
import com.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User findUserByEmail(String em){
        return userRepo.findByEmail(em);
    }
    public User save(User user){
        return userRepo.save(user);
    }
}
