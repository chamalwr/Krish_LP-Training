import { Branch } from "./admin.model";

export interface CreateAdmin{
    firstName: string,
    lastName: string,
    email: string,
    contactNumber: string,
    branch: Branch,
}