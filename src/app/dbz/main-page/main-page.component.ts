import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  nuevo: Personaje={
    nombre:'Pepe',
    poder:123
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }
  
  // agregarNuevoPersonaje( argumento:Personaje){
  //   this.personajes.push(argumento);
    
  // }
  

  constructor( ) {
    
  }


}
