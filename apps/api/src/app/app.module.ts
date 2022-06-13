import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Vote } from './votes/vote.entity';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    VotesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33061,
      username: 'user',
      password: 'veryhot',
      database: 'howhot',
      entities:[Vote],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
