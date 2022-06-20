
import { StatesService } from './states/states.service';
import { States } from './states/state.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(
    private stateService: StatesService,
  ) {}


  postVote(vote: States) {
    return this.stateService.postVote(vote);
  }

  // countVotes(){
  //   return this.voteService.getVotesCount();
  // }

}
