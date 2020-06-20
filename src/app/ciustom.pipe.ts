import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ciustom'
})
export class CiustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
