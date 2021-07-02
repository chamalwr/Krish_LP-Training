import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Branch } from './admin.model';

@Injectable()
export class AdminBranchValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!(value.branch in Branch)){
        throw new BadRequestException(`${value.branch} is not a valid department`);
    }
    return value;
  }
}
