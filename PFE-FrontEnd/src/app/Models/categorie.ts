export class Categorie {
  constructor(
    public id: number,
    public code: string,
    public libelle: string,
    public pourcentage: number,
    public taxeBoissons: number
  ) {}
}
