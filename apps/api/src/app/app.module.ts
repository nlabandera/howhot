import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Votes } from './votes/vote.entity';
import { VotesModule } from './votes/votes.module';
import { Users } from './entities/user.entity';
import { UsersModule } from './modules/users.module';
import { Roles } from './entities/role.entity';
import { RolesModule } from './modules/roles.module';
import { States } from './entities/state.entity';
import { StatesModule } from './modules/states.module';



@Module({
  imports: [
    VotesModule,
    UsersModule,
    StatesModule,
    RolesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33061,
      username: 'user',
      password: 'veryhot',
      database: 'howhot',
      entities:[Users, States],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
