import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'task3validator'
})
export class Task3validatorPipe implements PipeTransform {

  transform(value: string): string {
    // Instruction when input empty
    if (value.length === 0) {
      return 'Write something in the input field to change this label';
    }

    // Collect errors
    const errors = new Set<string>();
    if (isNaN(Number(value))) {
      errors.add( 'is not an integer' );
    }
    if (value.length < 3) {
      errors.add( 'is too short' );
    }
    if (value.indexOf('9') === -1) {
      errors.add( 'does not contain a 9' );
    }

    // Return errors
    if (errors.size > 0) {
      return 'the inserted text ' + Array.from(errors).join(' and ');
    }

    // No errors - valid
    return 'validated';
  }

}
