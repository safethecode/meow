import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.healthService.healthCheck();
  }
}
