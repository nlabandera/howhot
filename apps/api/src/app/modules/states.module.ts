import { StatesService } from '../services/states.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { States } from '../entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([States])],
  providers: [StatesService],
  exports: [StatesService]
})
export class StatesModule {}
