import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter'
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length !== 16) {
      return value; 
    }

 
    return value.replace(/(\d{4})/g, '$1- ').trim();

  }
}