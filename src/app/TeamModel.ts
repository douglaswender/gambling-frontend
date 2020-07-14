export class Team {
  id: number;
  nome: string;
  brand: string;
  logo: string;

  constructor(id: number, nome: string, brand:string, logo:string){
    this.id = id;
    this.nome = nome;
    this.brand = brand;
    this.logo = logo;
  }
}
