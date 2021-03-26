package com.app_pfe.demo.bean;

import javax.persistence.*;

@Entity
public class Local {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String ref;
    private String adress;
    private String nom_Comercial;
    private String numero_Autorisation;
    private String numero_caissier;

    @ManyToOne
    private Categorie categorie;

    @ManyToOne
    private Redevable redevable;

    public Local() {}

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }

    public Redevable getRedevable() {
        return redevable;
    }

    public void setRedevable(Redevable redevable) {
        this.redevable = redevable;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getNom_Comercial() {
        return nom_Comercial;
    }

    public void setNom_Comercial(String nom_Comercial) {
        this.nom_Comercial = nom_Comercial;
    }

    public String getNumero_Autorisation() {
        return numero_Autorisation;
    }

    public void setNumero_Autorisation(String numero_Autorisation) {
        this.numero_Autorisation = numero_Autorisation;
    }

    public String getNumero_caissier() {
        return numero_caissier;
    }

    public void setNumero_caissier(String numero_caissier) {
        this.numero_caissier = numero_caissier;
    }

    @Override
    public String toString() {
        return "Local{" +
                "id=" + id +
                ", ref='" + ref + '\'' +
                ", adress='" + adress + '\'' +
                ", nom_Comercial='" + nom_Comercial + '\'' +
                ", numero_Autorisation='" + numero_Autorisation + '\'' +
                ", numero_caissier='" + numero_caissier + '\'' +
                ", categorie=" + categorie +
                ", redevable=" + redevable +
                '}';
    }
}
