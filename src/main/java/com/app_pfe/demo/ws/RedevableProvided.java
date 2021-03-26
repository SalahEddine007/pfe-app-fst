package com.app_pfe.demo.ws;

import com.app_pfe.demo.bean.Categorie;
import com.app_pfe.demo.bean.Local;
import com.app_pfe.demo.bean.Redevable;
import com.app_pfe.demo.service.RedevableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = ("http://localhost:4200"))

@RequestMapping(value = "app-communel/redevable")
public class RedevableProvided {

    @Autowired
    private final RedevableService redevableService;

    public RedevableProvided(RedevableService redevableService) {
        this.redevableService = redevableService;
    }

    @GetMapping("/ref/{ref}")
    public Redevable findByRef(@PathVariable String ref) {
        return redevableService.findRedevableByRef(ref);
    }

    @GetMapping("/type/{type}")
    public List<Redevable> findByType(@PathVariable String type) {
        return redevableService.findRedevableByType(type);
    }

    @GetMapping("/all-redevable")
    public List<Redevable> findAll() {
        return redevableService.findAll();
    }

    @PostMapping("/add-redevable")
    /*public int save(@RequestBody Redevable redevable) {
        return redevableService.save(redevable);
    }*/
    public ResponseEntity<Redevable> addRedevable(@RequestBody Redevable redevable) {
        Redevable newRedevable = redevableService.addRedevable(redevable);
        return new ResponseEntity<>(newRedevable, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete-redevable/id/{id}")
    /*public void deleteRedevableById(@PathVariable("id") Long id) {
        redevableService.deleteRedevableById(id);
    }*/
    public ResponseEntity<?> deleteRedevable(@PathVariable("id") Long id) {
        redevableService.deleteRedevableById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/update-redevable")
    public ResponseEntity<Redevable> updateRedevable(@RequestBody Redevable redevable){
        Redevable update = redevableService.updateRedevableById(redevable);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }

    /*@GetMapping("/redevable/ref/{ref}")
    public List<Local> findByRedevableRef(@PathVariable String ref) {
        return localService.findLocalByRedevableRef(ref);
    }*/

}
