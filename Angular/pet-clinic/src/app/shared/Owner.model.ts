export class Owner{
  id: string;
  fullName: string;
  email: string;
  address: string;
  contactNumber: string;
  petId: string;
  constructor(id: string, fullName: string, email: string, address: string, contactNumber: string, petId: string) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.address = address;
    this.contactNumber = contactNumber;
    this.petId = petId;
  }
}
