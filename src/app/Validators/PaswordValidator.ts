'use strict';

import {AbstractControl, ValidatorFn} from '@angular/forms';
import {User} from '../models/user/User';

export function PasswordConfirmValidator( user: User ): ValidatorFn {

  return (control: AbstractControl): {[key: string]: any} | null => {

    console.log( 'pass: ' , user.userPassword , 'confirm: ' ,  control.value);

    const validatorErrorObject = {
      'Confirmation': {
        value: control.value,
        errorMessage: 'Пароли не совпадают'
      }
    };

    const checkConfirm = user.userPassword === control.value;

    return checkConfirm ? null : validatorErrorObject ;

  };
}
