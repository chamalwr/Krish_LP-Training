import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hpc-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  listOwners(){
    this.router.navigate(['/list-owner'])
  }

}
