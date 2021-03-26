package com.app_pfe.demo.service;

import com.app_pfe.demo.bean.Categorie;
import com.app_pfe.demo.bean.Redevable;
import com.app_pfe.demo.dao.RedevableDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RedevableService {

    public Redevable findRedevableByRef(String ref) {
        return redevableDao.findRedevableByRef(ref);
    }

    public List<Redevable> findRedevableByType(String type) {
        return redevableDao.findRedevableByType(type);
    }

    public List<Redevable> findAll() {
        return redevableDao.findAll();
    }

    public Redevable addRedevable(Redevable redevable) {

            System.out.println("le redevable a créer avec success");
            return redevableDao.save(redevable);

    }

    private Redevable findRedevableById(Long id) {
        return redevableDao.findRedevableById(id);
    }

    public Redevable updateRedevableById(Redevable redevable) {

        return redevableDao.save(redevable);
    }

    @Transactional
    /*public int deleteRedevableById(Long id) {
        Redevable redevable = findRedevableById(id);
        if(redevable==null){
            return -1;
        }
        else {
            redevableDao.deleteRedevableById(id);
            System.out.println("Redevable delete avec success");
            return 1;
        }
    }*/
    public void deleteRedevableById(Long id){
        redevableDao.deleteRedevableById(id);
        System.out.println("Redevable delete avec success");
    }



    @Autowired
    private RedevableDao redevableDao;
}
