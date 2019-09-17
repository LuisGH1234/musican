import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestModule } from './modules';
import { DatabaseConfig } from './config/database.config';

@Module({
    imports: [
      TypeOrmModule.forRootAsync({
          useFactory: () => DatabaseConfig.get,
      }),
      TestModule
    ],
})
export class AppModule {}
