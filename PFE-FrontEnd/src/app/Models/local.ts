import { Categorie } from '../Models/categorie';
import { Redevable } from '../Models/redevable';

export class Local {
  constructor(
    public id: number,
    public ref: string,
    public adress: string,
    public nom_Comercial: string,
    public numero_Autorisation: string,
    public numero_caissier: string,
    public categorie: Categorie = new Categorie(0, '', '', 0, 0),
    public redevable: Redevable = new Redevable(0, '', '', '', '', '', '', '')
  ) {}
}
