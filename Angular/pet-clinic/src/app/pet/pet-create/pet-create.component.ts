import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/Pet.model';
import Pets from '../../shared/data/petData.json';

@Component({
  selector: 'hpc-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss']
})
export class PetCreateComponent implements OnInit {
  petsList: any[] = Pets;
  constructor() { }

  ngOnInit(): void {
  }

  addPet(data: any){
    let id = 'PT_' + Math.random().toString(36).substr(2, 9);
    let newPet = new Pet(id, data.name, data.type, data.age, data.breed, data.country, data.owner, data.cause);
    this.petsList.push(newPet);
    alert("New Pet: " + newPet.name + " added");
  }
}
