package com.app_pfe.demo.dao;

import com.app_pfe.demo.bean.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@Repository
public interface LocalDao extends JpaRepository<Local,Long> {

    Local findByRef(String ref);
    Local findLocalById(Long id);

    List<Local> findLocalByRedevableRef(String ref);

    Local findLocalByAdressLike(String adress);

    List<Local> findLocalByCategorieCode(String code);

    int deleteLocalsByRef(String ref);
    int deleteLocalsById(Long id);





}
