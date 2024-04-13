import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('typeorm.host'),
        port: configService.get('typeorm.port'),
        username: configService.get('typeorm.username'),
        password: configService.get('typeorm.password'),
        database: configService.get('typeorm.database'),
        synchronize: configService.get('typeorm.synchronize'),
        logging: configService.get('typeorm.logging'),
        schema: configService.get('typeorm.schema'),
        entities: [join(__dirname, '/../../core/**/entity/*.entity.js')],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class GlobalTypeOrmModule {}
