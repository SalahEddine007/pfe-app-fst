package com.app_pfe.demo.service;

import com.app_pfe.demo.bean.Categorie;
import com.app_pfe.demo.bean.Local;
import com.app_pfe.demo.bean.Redevable;
import com.app_pfe.demo.dao.LocalDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class LocalService {

    public Local findByRef(String ref) {
        return localDao.findByRef(ref);
    }

    public List<Local> findAll() {
        return localDao.findAll();
    }

    public Local findLocalByAdressLike(String adress) {
        return localDao.findLocalByAdressLike(adress);
    }

    public List<Local> findLocalByRedevableRef(String ref) {
        return localDao.findLocalByRedevableRef(ref);
    }

    public List<Local> findLocalByCategorieCode(String code) {
        return localDao.findLocalByCategorieCode(code);
    }

    public Local findLocalById(Long id) {
        return localDao.findLocalById(id);
    }

    @Transactional
    public void deleteLocalsByRef(String ref) {
        localDao.deleteLocalsByRef(ref);
        System.out.println("Local delete avec success");
    }

    @Transactional
    public void deleteLocalsById(Long id) {
        localDao.deleteLocalsById(id);
        System.out.println("Local delete avec success");

    }

    /*public int save(Local local) {
        localDao.save(local);
        System.out.println("le local a crée avec success");
        return 1;
    }
*/
    public Local addLocal(Local local) {

        System.out.println("le local a créer avec success");
        return localDao.save(local);

    }

    /*public Local updateLocal(Local local){
        if(localDao.findLocalById(local.getId()) == null){
            return null;
        }
        System.out.println("Local update avec success");
        return localDao.save(local);
    }
*/
    public Local updateLocalById(Local local) {

        return localDao.save(local);
    }





    @Autowired
    private LocalDao localDao;

}
