import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';



@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
    // @InjectRepository(States) private statesRepository: Repository<States>,

  ) { }

  getUsers() {
    return this.usersRepository.find()
  }

  postUser(user: Users) {
    return this.usersRepository.save([user]);
  }


}
