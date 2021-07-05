import { Branch } from "./admin.enum";

export interface UpdateAdminDto{
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    contactNumber: string,
    branch: Branch,
}