import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hpc-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  goToOwners(){
    this.router.navigate(["/owner"])
  }

  goToPets(){
    this.router.navigate(["/pet"])
  }

}
