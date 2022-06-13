import { VotesService } from "./votes.service";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vote } from "./vote.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Vote])],
  providers: [VotesService],
  exports: [VotesService]
})
export class VotesModule {}
