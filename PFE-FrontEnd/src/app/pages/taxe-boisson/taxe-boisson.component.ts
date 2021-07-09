import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { TaxeBoisson } from '../../Models/taxe-boisson';
import { Local } from '../../Models/local';
import { Categorie } from '../../Models/categorie';
import { CategorieService } from '../../services/categorie.service';
import { LocalService } from '../../services/local.service';
import { TaxeBoissonService } from '../../services/taxe-boisson.service';

@Component({
  selector: 'app-taxe-boisson',
  templateUrl: './taxe-boisson.component.html',
  styleUrls: ['./taxe-boisson.component.css'],
})
export class TaxeBoissonComponent implements OnInit {
  pagelocalsPagination: number = 1;
  pagetaxeBoissonsPagination: number = 1;
  @Input('dataX') localsPagination: Local[];
  @Input('dataY') taxeBoissonsPagination: TaxeBoisson[];

  public taxeBoissons: TaxeBoisson[];
  public AddTaxeBoisson: TaxeBoisson = new TaxeBoisson(0, 0, 0, 0, 0);
  public editTaxeBoisson: TaxeBoisson = new TaxeBoisson(0, 0, 0, 0, 0);

  public locals: Local[];
  public categories: Categorie[];

  constructor(
    private taxeBoissonService: TaxeBoissonService,
    private localService: LocalService,
    private categorieService: CategorieService
  ) {}

  ngOnInit(): void {
    this.getTaxeBoissons();
    this.getLocals();
    this.getCategories();
  }

  onTypeChanged(value) {
    console.log('onTypeChanged');
    console.log(value);
  }

  public getTaxeBoissons() {
    this.taxeBoissonService.getTaxeBoisson().subscribe(
      (res) => {
        this.taxeBoissons = res;
        console.log(res);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public getCategories() {
    this.categorieService.getCategories().subscribe(
      (res) => {
        this.categories = res;
        console.log(res);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public getLocals(): void {
    this.localService.getLocals().subscribe(
      (response) => {
        this.locals = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public get addTaxeBoisson() {
    return this.AddTaxeBoisson;
  }

  public onAddTaxBoisson() {
    document.getElementById('add-taxeBoisson-form').click();
    this.taxeBoissonService.addTaxeBoisson(this.AddTaxeBoisson).subscribe(
      (response: TaxeBoisson) => {
        console.log(response);
        this.getTaxeBoissons();
        // onAddLocal.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        // onAddLocal.reset();
      }
    );
    console.log('ffffffff');

    console.log(this.AddTaxeBoisson);
  }

  public onUpdateTaxBoisson() {
    document.getElementById('add-taxBoisson-form').click();
    this.taxeBoissonService.updateTaxeBoisson(this.editTaxeBoisson).subscribe(
      (response: TaxeBoisson) => {
        console.log(response);
        this.getTaxeBoissons();
        // onAddLocal.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        // onAddLocal.reset();
      }
    );
    console.log('ffffffff');

    console.log(this.editTaxeBoisson);
  }

  public searchLocals(key: string): void {
    console.log(key);
    const results: Local[] = [];
    for (const local of this.locals) {
      if (
        local.redevable.ref.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        local.ref.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        local.adress.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(local);
      }
    }
    this.locals = results;
    if (results.length === 0 || !key) {
      this.getLocals();
    }
  }
  public searchPaiements(key: string): void {
    console.log(key);
    const results: TaxeBoisson[] = [];
    for (const taxeBoisson of this.taxeBoissons) {
      if (
        taxeBoisson.annee
          .toString()
          .toLowerCase()
          .indexOf(key.toLowerCase()) !== -1 ||
        taxeBoisson.local.adress.toLowerCase().indexOf(key.toLowerCase()) !==
          -1 ||
        // taxeBoisson.categorie.libelle
        //   .toLowerCase()
        //   .indexOf(key.toLowerCase()) !== -1
        taxeBoisson.categorie.libelle
          .toLowerCase()
          .indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(taxeBoisson);
      }
    }
    this.taxeBoissons = results;
    if (results.length === 0 || !key) {
      this.getTaxeBoissons();
    }
  }
  public onOpenModal(taxeBoisson: TaxeBoisson, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addTaxeBoissonModal');
    }
    if (mode === 'edit') {
      this.editTaxeBoisson = taxeBoisson;
      button.setAttribute('data-target', '#updateTaxeBoissonModal');
    }
    // if (mode === 'delete') {
    //   this.deleteLocal = local;
    //   button.setAttribute('data-target', '#deleteLocalModal');
    // }
    container.appendChild(button);
    button.click();
  }
}
