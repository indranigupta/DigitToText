import { Pipe, PipeTransform } from '@angular/core';
import * as numberToWords from 'number-to-words';

@Pipe({
  name: 'digitToText'
})
export class DigitToTextPipe implements PipeTransform {
  transform(value: number): string {
    return numberToWords.toWords(value);
  }
}
