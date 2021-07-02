import { Branch } from "./admin.enum";

export interface CreateAdmin{
    firstName: string,
    lastName: string,
    email: string,
    contactNumber: string,
    branch: Branch,
}