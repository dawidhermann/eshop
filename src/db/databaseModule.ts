import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { dbConfig } from './config/database.config';
import { DatabaseService } from './database.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [dbConfig],
    }),
    MikroOrmModule.forRoot({}),
  ],
  providers: [DatabaseService],
})
export class DatabaseModule {}
