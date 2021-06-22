import { Component, OnInit } from '@angular/core';
import pets from '../../shared/data/petData.json';
import {Pet} from '../../shared/Pet.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'hpc-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  id = '';
  name = '';
  type = '';
  age = 0;
  breed = '';
  country = '';
  owner = '';
  cause = '';

  petsData: Pet[] = pets;
  private sub: any;
  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.id = params.id;
      this.name = params.name;
      this.type = params.type;
      this.age = Number(params.age);
      this.breed = params.breed;
      this.country = params.country;
      this.owner = params.owner;
      this.cause = params.cause;
    });
    this.addUpdatedPetToList();
  }

  deletePet(id: string) {
    const removeIndex = this.petsData.map(function(pet) { return pet.id; }).indexOf(id);
    this.petsData.splice(removeIndex, 1);
  }

  editPet(id: string) {
    const selectedPet  = this.petsData.find(obj => obj.id === id);
    this.router.navigate(['../pet/edit-pet', selectedPet]);
  }

  addUpdatedPetToList(){
    if(this.isPetExists(this.id)){
      let updatedPet = new Pet(this.id, this.name, this.type, Number(this.age), this.breed, this.country, this.owner, this.cause);
      this.deletePet(this.id);
      this.petsData.push(updatedPet);
    }else if(this.id !== undefined || ''){
      let newPet = new Pet(this.id, this.name, this.type, Number(this.age), this.breed, this.country, this.owner, this.cause);
      this.petsData.push(newPet);
    }
  }

  isPetExists(id: string) {
    return this.petsData.some((el) => {
      return el.id === id;
    });
  }
}
