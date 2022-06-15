import { VotesService } from "./votes.service";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Votes } from "./vote.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Votes])],
  providers: [VotesService],
  exports: [VotesService]
})
export class VotesModule {}
