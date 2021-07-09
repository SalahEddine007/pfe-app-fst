package com.app_pfe.demo.service;

import com.app_pfe.demo.dtos.UserDTO;
import com.app_pfe.demo.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		com.app_pfe.demo.bean.User user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username : " + username);
		}
		return new User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}
	
	public com.app_pfe.demo.bean.User save(UserDTO user) {
		com.app_pfe.demo.bean.User newUser = new com.app_pfe.demo.bean.User();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}
}
