import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "../users/user.entity";
import { States } from "./state.entity";


@Injectable()
export class StatesService {

  constructor(
    @InjectRepository(States) private statesRepository: Repository<States>,
  ) { }

  postVote(vote: States) {
    return this.statesRepository.save([vote]);
  }
  getVotes(){
    return this.statesRepository.find();
  }

  async getUsersOfVotes(id: number): Promise<Users[]>{
    console.log(id);
    const state: States = await this.statesRepository.findOne({where : {id: id}, relations: ['users']});
    return state.users;
  }

}
