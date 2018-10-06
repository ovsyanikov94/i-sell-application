'use strict';

export const passwordValid = function (pasword: string, confPassword: string ): string{

  if ( pasword === confPassword){
    return null;
  }


  return 'пароль не совпадает';

}
