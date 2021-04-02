import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Models/categorie';
import { CategorieService } from '../services/categorie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent implements OnInit {
  public categories: Categorie[];
  public editCategorie: Categorie;
  public deleteCategorie: Categorie;

  constructor(private categorieService: CategorieService) {}

  ngOnInit() {
    this.getCategories();
  }

  public getCategories(): void {
    this.categorieService.getCategories().subscribe(
      (response: Categorie[]) => {
        this.categories = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddCategorie(addForm: NgForm): void {
    document.getElementById('add-categorie-form').click();
    this.categorieService.addCategorie(addForm.value).subscribe(
      (response: Categorie) => {
        console.log(response);
        this.getCategories();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCategorie(categorie: Categorie): void {
    this.categorieService.updateCategorie(categorie).subscribe(
      (response: Categorie) => {
        console.log(response);
        this.getCategories();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCategorie(redevableId: number): void {
    this.categorieService.deleteCategorie(redevableId).subscribe(
      (response: void) => {
        console.log('Deleted success !' + response);
        this.getCategories();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchCategories(key: string): void {
    console.log(key);
    const results: Categorie[] = [];
    for (const categorie of this.categories) {
      if (
        categorie.code.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        categorie.libelle.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(categorie);
      }
    }
    this.categories = results;
    if (results.length === 0 || !key) {
      this.getCategories();
    }
  }

  public onOpenModal(categorie: Categorie, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCategorieModal');
    }
    if (mode === 'edit') {
      this.editCategorie = categorie;
      button.setAttribute('data-target', '#updateCategorieModal');
    }
    if (mode === 'delete') {
      this.deleteCategorie = categorie;
      button.setAttribute('data-target', '#deleteCategorieModal');
    }
    container.appendChild(button);
    button.click();
  }
}
