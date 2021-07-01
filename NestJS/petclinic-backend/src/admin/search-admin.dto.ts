import { IsIn } from "class-validator";
import { Branch, Status } from "./admin.model";

export class SearchAdmin {
    @IsIn(Object.values(Branch))
    branch: Branch
}