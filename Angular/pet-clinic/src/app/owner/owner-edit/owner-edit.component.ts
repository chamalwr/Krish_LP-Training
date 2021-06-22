import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Owner} from '../../shared/Owner.model';

@Component({
  selector: 'hpc-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.scss']
})
export class OwnerEditComponent implements OnInit {
  id = '';
  fullName = '';
  email = '';
  address = '';
  contactNumber = '';
  petId = '';
  private sub: any;
  constructor(private router: ActivatedRoute, private navigateRouter: Router) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      this.id = params.id;
      this.fullName = params.fullName;
      this.email = params.email;
      this.address = params.address;
      this.contactNumber = params.contactNumber;
      this.petId = params.petId;
    });
  }

  updateOwner(value: any) {
    const updatedOwner = new Owner(this.id, value.fullName, value.email, value.address, value.contactNumber, value.petId);
    this.navigateRouter.navigate(['../owner/list-owner', updatedOwner]);
  }
}
