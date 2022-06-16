import { Injectable } from '@nestjs/common';
import { Votes } from './votes/vote.entity';
import { VotesService } from './votes/votes.service';

@Injectable()
export class AppService {

  constructor(
    private voteService: VotesService
  ) {}

  getVotes() {
    return this.voteService.getVotes();
  }

  postVote(vote: Votes) {
    return this.voteService.postVote(vote);
  }

  countVotes(){
    return this.voteService.getVotesCount();
  }

}
