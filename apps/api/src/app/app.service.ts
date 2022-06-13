import { Injectable } from '@nestjs/common';
import { Vote } from './votes/vote.entity';
import { VotesService } from './votes/votes.service';

@Injectable()
export class AppService {

  constructor(
    private voteService: VotesService
  ) {}

  getVotes() {
    return this.voteService.getVotes();
  }

  postVote(vote: Vote) {
    return this.voteService.postVote(vote);
  }

}
