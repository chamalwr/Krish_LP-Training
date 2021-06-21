import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'hpc-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.scss']
})
export class OwnerEditComponent implements OnInit {
  id: string | undefined;
  fullName: string | undefined;
  email: string | undefined;
  address: string | undefined;
  contactNumber: string | undefined;
  petId: string | undefined;
  private sub: any;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      this.id = params.id;
      this.fullName = params['fullName'];
      this.email = params['email'];
      this.address = params['address'];
      this.contactNumber = params['contactNumber'];
      this.petId = params['petId'];
    });
  }

  updateOwner(value: any) {

  }
}
