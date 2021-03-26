package com.app_pfe.demo.service;

import com.app_pfe.demo.bean.*;
import com.app_pfe.demo.dao.TaxeBoissonDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TaxeBoissonService {

    @Autowired
    private TaxeBoissonDao taxeBoissonDao;
    @Autowired
    private CategorieService categorieService;


    public List<TaxeBoisson> findAll() {
        return taxeBoissonDao.findAll();
    }

    public TaxeBoisson findTaxeBoissonsById(Long id) {
        return taxeBoissonDao.findTaxeBoissonsById(id);
    }

    public int save(TaxeBoisson taxeBoisson) {
        if(taxeBoisson == null){
            return -1;
        } else {
            Categorie categorie = categorieService.findCategorieById(taxeBoisson.getCategorie().getId());
            Double benefice = taxeBoisson.getBenefice();
            Double montant = categorie.getPourcentage() * benefice;
            Double total = taxeBoisson.getMontantBase() + montant;
            taxeBoisson.setMontantBase(total);
            taxeBoissonDao.save(taxeBoisson);
            System.out.println("le taxe boisson a créer avec success " + total);
            return 1;
        }
    }

    public TaxeBoisson updateTaxeBoisson(TaxeBoisson taxeBoisson){

        if(findTaxeBoissonsById(taxeBoisson.getId()) == null){
            return null;
        }
        else {
            Categorie categorie = categorieService.findCategorieById(taxeBoisson.getCategorie().getId());
            Double benefice = taxeBoisson.getBenefice();
            Double montant = categorie.getPourcentage() * benefice;
            Double total = taxeBoisson.getMontantBase() + montant;
            taxeBoisson.setMontantBase(total);
            System.out.println("Taxe Boisson update avec success");
            return taxeBoissonDao.save(taxeBoisson);
            }
    }

    @Transactional
    public void deleteTaxeBoissonById(Long id) {
        taxeBoissonDao.deleteTaxeBoissonById(id);
        System.out.println("Taxe boisson delete avec success");

    }




}
