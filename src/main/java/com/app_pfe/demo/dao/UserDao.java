package com.app_pfe.demo.dao;

import com.app_pfe.demo.bean.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends CrudRepository<User, Integer> {

	User findByUsername(String username);
	
}
