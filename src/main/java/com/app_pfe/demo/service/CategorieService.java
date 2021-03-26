package com.app_pfe.demo.service;

import com.app_pfe.demo.bean.Categorie;
import com.app_pfe.demo.dao.CategorieDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Service
public class CategorieService {


    public Categorie findCategorieByCode(String Code) {
        return categorieDao.findCategorieByCode(Code);
    }

    public int save(Categorie categorie){
        categorieDao.save(categorie);
        System.out.println("Categorie a créer avec success");
        return 1;
    }

    public Categorie updateCategorieById(Categorie categorie){
        System.out.println("Categorie update avec success");
        return categorieDao.save(categorie);
    }

    public Categorie findCategorieByLibelle(String Libelle) {
        return categorieDao.findCategorieByLibelle(Libelle);
    }

    public Categorie findCategorieById(Long Id) {
        return categorieDao.findCategorieById(Id);
    }

    public List<Categorie> findAll() {
        return categorieDao.findAll();
    }

    @Transactional
    public void deleteCategorieById(Long Id) {
        categorieDao.deleteCategorieById(Id);
        System.out.println("Categorie delete avec success");
    }


    /*public int updateCategorie(Categorie categorie){
        categorieDao.save(categorie);
        System.out.println("Categorie update avec success");
        return 1;
    }*/

    @Autowired
    private CategorieDao categorieDao;
}
