import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { States } from './state.entity';
import { StatesService } from './states.service';



@Module({
  imports: [TypeOrmModule.forFeature([States])],
  providers: [StatesService,],
  exports: [StatesService,]
})
export class StatesModule {}
