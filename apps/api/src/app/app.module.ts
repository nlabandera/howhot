import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Users } from './users/user.entity';
import { States } from './states/state.entity';
import { StatesModule } from './states/states.module';
import { AppService } from './app.service';


@Module({
  imports: [
    StatesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33061,
      username: 'user',
      password: 'veryhot',
      database: 'howhot',
      entities: [Users, States],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
