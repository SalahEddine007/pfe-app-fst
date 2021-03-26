package com.app_pfe.demo.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jdk.nashorn.internal.objects.annotations.Setter;

import javax.persistence.*;
import java.util.List;
//import java.util.List;

@Entity
public class Categorie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String code;
    private String libelle;
    private Double pourcentage;

    @OneToMany(mappedBy = "categorie")
    private List<Local> local;

    @OneToMany(mappedBy = "categorie")
    private List<TaxeBoisson> taxeBoissons;


    public Categorie() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Double getPourcentage() {
        return pourcentage;
    }

    public void setPourcentage(Double pourcentage) {
        this.pourcentage = pourcentage;
    }

    @JsonIgnore
    public List<Local> getLocal() {
        return local;
    }

    @Setter
    public void setLocal(List<Local> local) {
        this.local = local;
    }

    @JsonIgnore
    public List<TaxeBoisson> getTaxeBoissons() {
        return taxeBoissons;
    }

    @Setter
    public void setTaxeBoissons(List<TaxeBoisson> taxeBoissons) {
        this.taxeBoissons = taxeBoissons;
    }

    @Override
    public String toString() {
        return "Categorie{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", libelle='" + libelle + '\'' +
                '}';
    }
}
