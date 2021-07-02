import { IsNotEmpty } from "class-validator"

export class CreatePetDto{
    @IsNotEmpty()
    name: string;
    age: number;
    breed: string;
    @IsNotEmpty()
    type: string;
}