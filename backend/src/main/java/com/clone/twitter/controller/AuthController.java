package com.clone.twitter.controller;

import com.clone.twitter.config.JwtProvider;
import com.clone.twitter.exception.UserException;
import com.clone.twitter.model.User;
import com.clone.twitter.model.Verification;
import com.clone.twitter.repository.UserRepository;
import com.clone.twitter.response.AuthResponse;
import com.clone.twitter.service.CustomUserDetailsServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private UserRepository userRepository;
    private BCryptPasswordEncoder passwordEncoder;
    private JwtProvider jwtProvider;
    private CustomUserDetailsServiceImplementation customUserDetails;

    public AuthController(UserRepository userRepository,
                          BCryptPasswordEncoder passwordEncoder,
                          JwtProvider jwtProvider,
                          CustomUserDetailsServiceImplementation customUserDetails) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtProvider = jwtProvider;
        this.customUserDetails = customUserDetails;
    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException {

        String email = user.getEmail();
        String password = user.getPassword();
        String fullName = user.getFullName();
        String birthDate = user.getBirthDate();

        User isEmailExists = userRepository.findByEmail(email);

        if(isEmailExists != null){
            throw new UserException(email + " already registered");
        }

        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setFullName(fullName);
        createdUser.setPassword(passwordEncoder.encode(password));
        createdUser.setBirthDate(birthDate);
        createdUser.setVerification(new Verification());
        User savedUser = userRepository.save(createdUser);

        Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtProvider.generateToken(authentication);
        AuthResponse response = new AuthResponse(token, true);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody User user){
        String username = user.getEmail();
        String password = user.getPassword();

        Authentication authentication = authenticate(username,password);
        String token = jwtProvider.generateToken(authentication);
        AuthResponse response = new AuthResponse(token, true);

        return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);
        if(userDetails == null){
            throw new BadCredentialsException("Invalid Username");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("Invalid Password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails,null, userDetails.getAuthorities());
    }
}
