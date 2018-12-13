import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastNameFirst'
})
export class LastNameFirstPipe implements PipeTransform {

  transform(value: any, arg?: any): any {
    let separator = arg ? arg : ',';
    return value.split(' ').reverse().join(separator);
  }

}
