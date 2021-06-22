import { Component, OnInit } from '@angular/core';
import owners from '../../shared/data/ownerData.json';
import {Owner} from '../../shared/Owner.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'hpc-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {
  id = '';
  fullName = '';
  email = '';
  address = '';
  contactNumber = '';
  petId = '';
  owners: Owner[] = owners;
  private sub: any;
  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.sub = this.activatedRouter.params.subscribe(params => {
      this.id = params.id;
      this.fullName = params.fullName;
      this.email = params.email;
      this.address = params.address;
      this.contactNumber = params.contactNumber;
      this.petId = params.petId;
    });
    this.addUpdatedPetToList();
  }

  ngOnInit(): void {
  }

  editOwner(id: string) {
    let selectedOwner  = this.owners.find(owner => owner.id === id);
    this.router.navigate(['../owner/edit-owner', selectedOwner]);
  }

  deleteOwner(id: string) {
    let removeIndex = this.owners.map(function(pet) { return pet.id; }).indexOf(id);
    this.owners.splice(removeIndex, 1);
  }

  addUpdatedPetToList(){
    if (this.isOwnerExists(this.id)){
      let updatedOwner = new Owner(this.id, this.fullName, this.email, this.address, this.contactNumber, this.petId);
      this.deleteOwner(this.id);
      this.owners.push(updatedOwner);
    }else if (this.id !== undefined || ''){
      let newOwner = new Owner(this.id, this.fullName, this.email, this.address, this.contactNumber, this.petId);
      this.owners.push(newOwner);
    }
  }

  isOwnerExists(id: string) {
    return this.owners.some((owner) => {
      return owner.id === id;
    });
  }
}
