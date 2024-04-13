import { Controller, Get } from '@nestjs/common';

@Controller('v1')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
