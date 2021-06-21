import { Component, OnInit } from '@angular/core';
import {Owner} from '../../shared/Owner.model';
import Owners from '../../shared/data/ownerData.json';

@Component({
  selector: 'hpc-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss']
})
export class OwnerCreateComponent implements OnInit {
  owners: any[] = Owners;
  constructor() { }

  ngOnInit(): void {
  }

  addOwner(data: any) {
    let id = 'OW_' + Math.random().toString(36).substr(2, 9);
    let owner = new Owner(id, data.fullName, data.email, data.address, data.contactNumber, data.petId);
    this.owners.push(owner);
    alert(this.owners);
  }
}
