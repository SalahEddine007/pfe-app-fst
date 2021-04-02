import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Redevable } from '../Models/redevable';
import { RedevableService } from '../services/redevable.service';

@Component({
  selector: 'app-redevable',
  templateUrl: './redevable.component.html',
  styleUrls: ['./redevable.component.css'],
})
export class RedevableComponent implements OnInit {
  public redevables: Redevable[];
  public editRedevable: Redevable;
  public deleteRedevable: Redevable;

  constructor(private redevableService: RedevableService) {}

  ngOnInit() {
    this.getRedevables();
  }

  onTypeChanged(value) {
    console.log('onTypeChanged');
    console.log(value);
  }

  public getRedevables(): void {
    this.redevableService.getRedevables().subscribe(
      (response: Redevable[]) => {
        this.redevables = response;
        console.log('Data :' + response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddRedevable(addForm: NgForm): void {
    document.getElementById('add-redevable-form').click();
    this.redevableService.addRedevabale(addForm.value).subscribe(
      (response: Redevable) => {
        console.log(response);
        this.getRedevables();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateRedevable(redevable: Redevable): void {
    this.redevableService.updateRedevable(redevable).subscribe(
      (response: Redevable) => {
        console.log(response);
        this.getRedevables();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteRedevable(redevableId: number): void {
    this.redevableService.deleteRedevable(redevableId).subscribe(
      (response: void) => {
        console.log('Deleted success !' + response);
        this.getRedevables();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchRedevables(key: string): void {
    console.log(key);
    const results: Redevable[] = [];
    for (const redevable of this.redevables) {
      if (
        redevable.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        redevable.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        redevable.ref.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(redevable);
      }
    }
    this.redevables = results;
    if (results.length === 0 || !key) {
      this.getRedevables();
    }
  }

  public onOpenModal(redevable: Redevable, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRedevableModal');
    }
    if (mode === 'edit') {
      this.editRedevable = redevable;
      button.setAttribute('data-target', '#updateRedevableModal');
    }
    if (mode === 'delete') {
      this.deleteRedevable = redevable;
      button.setAttribute('data-target', '#deleteRedevableModal');
    }
    container.appendChild(button);
    button.click();
  }
}
