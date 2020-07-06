export class Team {
  id: number;
  name: string;
  brand: string;
  logo: string;

  constructor(id: number, name: string, brand:string, logo:string){
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.logo = logo;
  }
}
