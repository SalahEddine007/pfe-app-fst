package com.app_pfe.demo.ws;

import com.app_pfe.demo.bean.Local;
import com.app_pfe.demo.bean.Redevable;
import com.app_pfe.demo.bean.TaxeBoisson;
import com.app_pfe.demo.service.TaxeBoissonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin(origins = ("http://localhost:8090"))
@RequestMapping(value = "app-communel/taxe-boisson")
public class TaxeBoissonProvided {

    @Autowired
    private final TaxeBoissonService taxeBoissonService;

    public TaxeBoissonProvided(TaxeBoissonService taxeBoissonService) {
        this.taxeBoissonService = taxeBoissonService;
    }

    @GetMapping("/allTaxeBoisson")
    public List<TaxeBoisson> findAll() {
        return taxeBoissonService.findAll();
    }

    @PostMapping("/add-taxe-boisson")
    public int save(@RequestBody TaxeBoisson taxeBoissonsimuler) {
        return taxeBoissonService.save(taxeBoissonsimuler);
    }

    @GetMapping("/taxe-boisson-by-id/id/{id}")
    public TaxeBoisson findTaxeBoissonsById(Long id) {
        return taxeBoissonService.findTaxeBoissonsById(id);
    }

    @PutMapping("/update-taxe-boisson")
    public ResponseEntity<TaxeBoisson> updateTaxe(@RequestBody TaxeBoisson taxeBoisson){
        TaxeBoisson update = taxeBoissonService.updateTaxeBoisson(taxeBoisson);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }

    @DeleteMapping("/delete-taxe-boisson/id/{id}")
    public void delete(@PathVariable("id") Long id) {
        taxeBoissonService.deleteTaxeBoissonById(id);
    }
}
