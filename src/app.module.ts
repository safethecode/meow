import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HealthCheckModule } from '@/core/health';
import { GlobalConfigurationModule, GlobalTypeOrmModule } from '@/config';

@Module({
  imports: [GlobalTypeOrmModule, GlobalConfigurationModule, HealthCheckModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
