import { IsIn } from "class-validator";
import { Branch, Status } from "./admin.enum";

export class SearchAdmin {
    @IsIn(Object.values(Branch))
    branch: Branch
}