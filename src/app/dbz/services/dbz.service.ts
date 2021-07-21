import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {

    private _personajes: Personaje[]=[
        {
          nombre:'Goku',
          poder:15000
        },
        {
          nombre:'Vegeta',
          poder: 7500
        }
      ]
    
      get personajes(): Personaje[] {
          return [...this._personajes] //lo usamos para pasar los valores y no las referencias 
      }
    

    constructor() {
              
    }

    agregarPersonajes(personaje: Personaje){
        this._personajes.push(personaje);
    }

}