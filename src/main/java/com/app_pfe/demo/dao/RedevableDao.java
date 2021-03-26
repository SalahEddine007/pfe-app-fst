package com.app_pfe.demo.dao;

import com.app_pfe.demo.bean.Redevable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
public interface RedevableDao extends JpaRepository<Redevable,Long> {

    Redevable findRedevableByRef(String ref);

    List<Redevable> findRedevableByType(String type);

    Redevable findRedevableById(Long id);

    List<Redevable> findAll();

    int deleteRedevableById(Long id);
}
