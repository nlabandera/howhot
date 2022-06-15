import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Votes } from './vote.entity';

@Injectable()
export class VotesService {
  constructor(
    @InjectRepository(Votes) private votesRepository: Repository<Votes>,
  ) {}

  getVotes() {
    return this.votesRepository.find()
    // .then(votes => { console.log(votes);return votes;})
  }

  postVote(vote: Votes){
    return this.votesRepository.save([vote]);
  }
}
