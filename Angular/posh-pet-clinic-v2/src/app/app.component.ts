import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'ppc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posh Pet Clinic';

  loggedUser : string = '';

  constructor(private keyCloakService: KeycloakService,
              private navigationRouter: Router) { }

  ngOnInit(): void {
    this.loadProfile().then(
      user => this.loggedUser = user.firstName + ' '  + user.lastName
    )
  }

  loadProfile(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if(this.keyCloakService.isLoggedIn()){
        this.keyCloakService.loadUserProfile()
            .then(data => resolve(data))
            .catch(error => console.log(error));
      }else{
        console.log("User is not logged in");
      }
    });
  }

  login(){
    this.keyCloakService.login();
  }

  logout(){
    this.keyCloakService.logout();
  }

  navigateToPets(){
    this.navigationRouter.navigate(['/pet']);
  }

  navigateToOwners(){
    this.navigationRouter.navigate(['/owner']);
  }

  navigateToAdmins(){
    this.navigationRouter.navigate(['/admin']);
  }

  navigateToHome(){
    this.navigationRouter.navigate(['/home']);
  }

  navigateToAddPets() {
    this.navigationRouter.navigate(['/pet/addpet']);
  }

  navigateToAddOwner() {
    this.navigationRouter.navigate(['/owner/addOwner']);
  }

  navigateToAddAdmin() {
    this.navigationRouter.navigate(['/admin/addadmin']);
  }
}
