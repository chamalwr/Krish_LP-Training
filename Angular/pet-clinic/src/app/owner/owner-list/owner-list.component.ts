import { Component, OnInit } from '@angular/core';
import owners from '../../shared/data/ownerData.json';
import {Owner} from '../../shared/Owner.model';
import {Router} from '@angular/router';

@Component({
  selector: 'hpc-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[] = owners;
  constructor(private router: Router) { }

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
}
