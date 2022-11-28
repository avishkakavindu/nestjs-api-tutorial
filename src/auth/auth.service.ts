import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'hello from signup' };
  }

  signin() {
    return { msg: 'hello from signin' };
  }
}
