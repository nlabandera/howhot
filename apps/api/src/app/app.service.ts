import { Injectable } from '@nestjs/common';
import { Users } from './entities/user.entity';
import { UsersService } from './services/users.service';
import { Votes } from './votes/vote.entity';
import { VotesService } from './votes/votes.service';

@Injectable()
export class AppService {

  constructor(
    private voteService: VotesService,
    private userService: UsersService
  ) {}

  getUsers(){
    return this.userService.getUsers();
  }

  postUser(user: Users){
    return this.userService.postUser(user);
  }

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
