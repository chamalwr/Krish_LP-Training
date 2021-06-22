import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pet} from '../../shared/Pet.model';

@Component({
  selector: 'hpc-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss']
})
export class PetEditComponent implements OnInit {
  id = '';
  name = '';
  type = '';
  age = '';
  breed = '';
  country = '';
  owner = '';
  cause = '';

  private sub: any;
  constructor(private router: ActivatedRoute, private navigateRouter: Router) {
  }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
      this.type = params['type'];
      this.age = params['age'];
      this.breed = params['breed'];
      this.country = params['country'];
      this.owner = params['owner'];
      this.cause = params['cause'];
    });
  }

  updatePet(value: any) {
    let updatedPet = new Pet(this.id, value.name, value.type, Number(value.age), value.breed, value.country, value.owner, value.cause);
    this.navigateRouter.navigate(['../pet/list-pet', updatedPet]);
  }
}
