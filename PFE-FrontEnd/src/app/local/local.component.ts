import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Local } from '../Models/local';
import { Redevable } from '../Models/redevable';
import { RedevableService } from '../services/redevable.service';

import { LocalService } from '../services/local.service';
import { Categorie } from '../Models/categorie';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css'],
})
export class LocalComponent implements OnInit {
  public locals: Local[];
  public editLocal: Local = new Local(0, '', '', '', '', '');
  public AddLocal: Local = new Local(0, '', '', '', '', '');
  public deleteLocal: Local;

  public redevables: Redevable[];
  public categories: Categorie[];

  constructor(
    private localService: LocalService,
    private redevableService: RedevableService,
    private categorieService: CategorieService
  ) {}

  ngOnInit() {
    this.getLocals();
    this.getRedevables();
    this.getCategories();
  }

  onTypeChanged(value) {
    console.log('onTypeChanged');
    console.log(value);
  }

  public getRedevables(): void {
    this.redevableService.getRedevables().subscribe(
      (response: Redevable[]) => {
        this.redevables = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
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
        alert(error.message);
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
        alert(error.message);
      }
    );
  }

  // public get local() {
  //   return this.localService.locals;
  // }

  public get addLocal() {
    return this.AddLocal;
  }
  public onAddLocal() {
    document.getElementById('add-local-form').click();
    this.localService.addLocal(this.AddLocal).subscribe(
      (response: Local) => {
        console.log(response);
        this.getLocals();
        // onAddLocal.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        // onAddLocal.reset();
      }
    );
    console.log('ffffffff');

    console.log(this.AddLocal);
  }

  public onUpdateLocal() {
    document.getElementById('add-local-form').click();
    this.localService.updateLocal(this.editLocal).subscribe(
      (response: Local) => {
        console.log(response);
        this.getLocals();
        // onAddLocal.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        // onAddLocal.reset();
      }
    );
    console.log('ffffffff');

    console.log(this.editLocal);
  }

  // public onAddLocal(local: Local): void {
  //   this.localService.addLocal(local).subscribe(
  //     (response: Local) => {
  //       console.log(response);
  //       this.getLocals();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public onUpdateLocal(local: Local): void {
  //   this.localService.updateLocal(local).subscribe(
  //     (response: Local) => {
  //       console.log(response);
  //       this.getLocals();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  public onDeleteLocal(localId: number): void {
    this.localService.deleteLocal(localId).subscribe(
      (response: void) => {
        console.log('Deleted success !' + response);
        this.getLocals();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchLocals(key: string): void {
    console.log(key);
    const results: Local[] = [];
    for (const local of this.locals) {
      if (
        local.ref.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        local.adress.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        local.nom_Comercial.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        local.numero_caissier.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        local.numero_Autorisation.toLowerCase().indexOf(key.toLowerCase()) !==
          -1 ||
        local.ref.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(local);
      }
    }
    this.locals = results;
    if (results.length === 0 || !key) {
      this.getLocals();
    }
  }

  public onOpenModal(local: Local, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addLocalModal');
    }
    if (mode === 'edit') {
      this.editLocal = local;
      button.setAttribute('data-target', '#updateLocalModal');
    }
    if (mode === 'delete') {
      this.deleteLocal = local;
      button.setAttribute('data-target', '#deleteLocalModal');
    }
    container.appendChild(button);
    button.click();
  }
}
