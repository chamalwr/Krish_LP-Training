import { Component, OnInit } from '@angular/core';
import pets from '../../shared/data/petData.json';
import {Pet} from '../../shared/Pet.model';
import {Router} from '@angular/router';

@Component({
  selector: 'hpc-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {

  petsData: Pet[] = pets;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deletePet(id: string) {
    let removeIndex = this.petsData.map(function(pet) { return pet.id; }).indexOf(id);
    this.petsData.splice(removeIndex, 1);
  }

  editPet(id: string) {
    let selectedPet  = this.petsData.find(obj => obj.id === id);
    this.router.navigate(['../pet/edit-pet', selectedPet]);
  }
}
