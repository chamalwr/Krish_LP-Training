export class Pet{
  id: string;
  name: string;
  type: string;
  age: number;
  breed: string;
  country: string;
  owner: string;
  cause: string;
  constructor(
    id: string,
    name: string,
    type: string,
    age: number,
    breed: string,
    country: string,
    owner: string,
    cause: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.age = age;
    this.breed = breed;
    this.country = country;
    this.owner = owner;
    this.cause = cause;
  }
}
