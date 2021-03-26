package com.app_pfe.demo.dao;

import com.app_pfe.demo.bean.Redevable;
import com.app_pfe.demo.bean.TaxeBoisson;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaxeBoissonDao extends JpaRepository<TaxeBoisson, Long> {

    TaxeBoisson findTaxeBoissonsById(Long id);

    List<TaxeBoisson> findAll();

    int deleteTaxeBoissonById(Long id);
}
