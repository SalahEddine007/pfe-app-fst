import { Component, OnInit } from '@angular/core';
import { Categorie } from '../Models/categorie';
import { Redevable } from '../Models/redevable';
import { Local } from '../Models/local';

import { HttpErrorResponse } from '@angular/common/http';
import { CategorieService } from '../services/categorie.service';
import { RedevableService } from '../services/redevable.service';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data1: Categorie[] = [];
  data2: Local[] = [];
  data3: Redevable[] = [];

  constructor(
    private categorieService: CategorieService,
    private redevableService: RedevableService,
    private localService: LocalService
  ) {}

  ngOnInit() {}

  public countCategorie;
  public countRedevable;
  public countLocal;

  result1 = this.categorieService.getCategories().subscribe(
    (res) => {
      this.data1 = res;
      console.log(res);
      // console.log(res.length);
      this.countCategorie = res.length;
    },
    (err) => {
      console.log(err);
    }
  );

  result2 = this.redevableService.getRedevables().subscribe(
    (res) => {
      this.data3 = res;
      console.log(res);
      // console.log(res.length);
      this.countRedevable = res.length;
    },
    (err) => {
      console.log(err);
    }
  );

  result3 = this.localService.getLocals().subscribe(
    (res) => {
      this.data2 = res;
      console.log(res);
      // console.log(res.length);
      this.countLocal = res.length;
    },
    (err) => {
      console.log(err);
    }
  );
}
