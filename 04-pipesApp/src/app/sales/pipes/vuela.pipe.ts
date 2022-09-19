import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform(volar: boolean): string {
    return (volar)? 'si vuela' : 'no vuela'
  }

}
