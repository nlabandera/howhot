import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vote } from './vote.entity';

@Injectable()
export class VotesService {
  constructor(
    @InjectRepository(Vote) private votesRepository: Repository<Vote>,
  ) {}

  getVotes() {
    return this.votesRepository.find()
    // .then(votes => { console.log(votes);return votes;})
  }

  postVote(vote: Vote){
    return this.votesRepository.save([vote]);
  }
}
