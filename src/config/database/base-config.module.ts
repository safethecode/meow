import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import DataBaseConfiguration from './database-configuration.loader';

@Module({
  imports: [
    forwardRef(() =>
      ConfigModule.forRoot({
        isGlobal: true,
        load: [DataBaseConfiguration],
      }),
    ),
  ],
})
export class GlobalConfigurationModule {}
