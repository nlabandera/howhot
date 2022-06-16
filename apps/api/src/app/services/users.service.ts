import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { States } from '../entities/state.entity';
import { Users } from '../entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>
  ) { }

  getUsers() {
    return this.usersRepository.find()
  }

  postUser(user: Users){
    return this.usersRepository.save([user]);
  }
}
