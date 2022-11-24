import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // global prefix route
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    return 'hello from signup';
  }

  @Post('signin')
  signin() {
    return 'hello from signin';
  }
}
