import { Injectable } from '@nestjs/common';
import { Vote } from '@howhot/api-interfaces';

@Injectable()
export class AppService {
  votes: Vote[] = [
    { email: 'nlabandera', vote: 'ok' },
    { email: 'acraiu', vote: 'ok' }
  ];

  getVotes(): Vote[] {
    return this.votes;
  }

  postVote(vote: Vote){
    const newVote = {
      email: vote.email,
      vote: vote.vote
    }
    this.votes = [...this.votes, newVote]
    return newVote;
  }

}
