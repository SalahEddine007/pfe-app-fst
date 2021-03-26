package com.app_pfe.demo.ws;

import com.app_pfe.demo.bean.Categorie;
import com.app_pfe.demo.bean.Local;
import com.app_pfe.demo.bean.Redevable;
import com.app_pfe.demo.service.LocalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = ("http://localhost:4200"))
@RequestMapping(value = "app-communel/local")
public class LocalProvided {

    @Autowired
    private final LocalService localService;

    public LocalProvided(LocalService localService) {
        this.localService = localService;
    }

    @GetMapping("/ref/{ref}")
    public Local findByRef(@PathVariable String ref) {
        return localService.findByRef(ref);
    }

    @GetMapping("/adress/{adress}")
    public Local findLocalByAdressLike(@PathVariable String adress) {
        return localService.findLocalByAdressLike(adress);
    }

    @GetMapping("/get-local-by-redevable/{ref}")
    public List<Local> findLocalByRedevableRef(@PathVariable String ref) {
        return localService.findLocalByRedevableRef(ref);
    }

    @GetMapping("get-local-by-categorie/{code}")
    public List<Local> findLocalByCategorieCode(@PathVariable String code) {
        return localService.findLocalByCategorieCode(code);
    }

    @GetMapping("/all-local")
    public List<Local> findAll() {
        return localService.findAll();
    }

    @PostMapping("/add-local")
    public ResponseEntity<Local> addLocal(@RequestBody Local local) {
        Local newLocal = localService.addLocal(local);
        return new ResponseEntity<>(newLocal, HttpStatus.CREATED);
    }
    /*public int save(@RequestBody Local local) {
        return localService.save(local);
    }*/

    @PutMapping("/update-local")
    public ResponseEntity<Local> updateLocal(@RequestBody Local local){
        Local update = localService.updateLocalById(local);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }


    @DeleteMapping("/delete-local/id/{id}")
    public void deleteLocalsById(@PathVariable("id") Long id) {
        localService.deleteLocalsById(id);
    }

    @DeleteMapping("/delete-local/ref/{ref}")
    public void deleteLocalsByRef(@PathVariable("ref") String ref) {
        localService.deleteLocalsByRef(ref);
    }

}
