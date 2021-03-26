package com.app_pfe.demo.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jdk.nashorn.internal.objects.annotations.Setter;

import javax.persistence.*;
//import java.util.Date;
import java.math.BigDecimal;
import java.util.List;

@Entity
public class TaxeBoisson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer trimestre;
    //@DateTimeFormat(pattern = "yyyy-MM-dd")
    private Integer annee;
    private Double benefice;
    private Double montantBase;


    @ManyToOne
    private Local local;

    @ManyToOne
    private Categorie categorie;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getTrimestre() {
        return trimestre;
    }

    public void setTrimestre(Integer trimestre) {
        this.trimestre = trimestre;
    }

    public Integer getAnnee() {
        return annee;
    }

    public void setAnnee(Integer annee) {
        this.annee = annee;
    }

    public Double getBenefice() {
        return benefice;
    }

    public void setBenefice(Double benefice) {
        this.benefice = benefice;
    }

    //@JsonIgnore
    public Double getMontantBase() {
        return montantBase;
    }

    //@Setter
    public void setMontantBase(Double montantBase) {
        this.montantBase = montantBase;
    }

    public Local getLocal() {
        return local;
    }

    public void setLocal(Local local) {
        this.local = local;
    }

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }
}
