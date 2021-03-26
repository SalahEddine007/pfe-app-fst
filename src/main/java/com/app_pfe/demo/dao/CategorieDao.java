package com.app_pfe.demo.dao;

import com.app_pfe.demo.bean.Categorie;
import com.app_pfe.demo.bean.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategorieDao extends JpaRepository<Categorie,Long> {

    Categorie findCategorieById(Long Id);
    Categorie findCategorieByCode(String Code);
    Categorie findCategorieByLibelle(String Libelle);
    int deleteCategorieById(Long Id);




}
