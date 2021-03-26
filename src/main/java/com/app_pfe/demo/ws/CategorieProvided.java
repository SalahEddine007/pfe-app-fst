package com.app_pfe.demo.ws;

import com.app_pfe.demo.bean.Categorie;
import com.app_pfe.demo.bean.Redevable;
import com.app_pfe.demo.service.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = ("http://localhost:4200"))

@RequestMapping(value = "app-communel/categorie")
public class CategorieProvided {

    @Autowired
    private final CategorieService categorieService;

    public CategorieProvided(CategorieService categorieService) {
        this.categorieService = categorieService;
    }

    @GetMapping("/get-categorie-by-code/{code}")
    public Categorie findCategorieByCode(@PathVariable("code") String Code) {
        return categorieService.findCategorieByCode(Code);
    }

    @GetMapping("/get-categorie-by-libelle/{libelle}")
    public Categorie findCategorieByLibelle(String Libelle) {
        return categorieService.findCategorieByLibelle(Libelle);
    }

    @GetMapping("/get-categorie-by-id/{id}")
    public Categorie findCategorieById(@PathVariable("id") Long Id) {
        return categorieService.findCategorieById(Id);
    }

    @GetMapping("/all-categories")
    public List<Categorie> findAll() {
        return categorieService.findAll();
    }

    @PostMapping("/add-categorie")
    public int save(@RequestBody Categorie categorie) {
        return categorieService.save(categorie);
    }

    @DeleteMapping("/delete-categorie/id/{id}")
    public void deleteCategorieById(@PathVariable("id") Long id) {
        categorieService.deleteCategorieById(id);
    }

    @PutMapping("/update-categorie")
    public ResponseEntity<Categorie> updateCategorie(@RequestBody Categorie categorie){
        Categorie update = categorieService.updateCategorieById(categorie);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }

    /*@PutMapping("/update/id/{id}")
    public int update(@PathVariable("id") Categorie categorie) {
        return categorieService.updateCategorie(categorie);
    }*/


}
