import { Categorie } from '../Models/categorie';
import { Local } from '../Models/local';

export class TaxeBoisson {
  constructor(
    public id: number,
    public trimestre: number,
    public annee: number,
    public benefice: number,
    public montantBase: number,
    public categorie: Categorie = new Categorie(0, '', '', 0, 0),
    public local: Local = new Local(0, '', '', '', '', '', 0)
  ) {}
}
