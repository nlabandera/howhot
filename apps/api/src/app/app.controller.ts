import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Users } from './entities/user.entity';
import { Votes } from './votes/vote.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(){
    return this.appService.getUsers();
  }

  @Post('users')
  postUser(@Body() user:Users){
    return this.appService.postUser(user);
  }

  @Get('votes')
  getVotes() {
    return this.appService.getVotes();
  }

  @Post('votes')
  postVote(@Body() vote: Votes){
    return this.appService.postVote(vote);
  }

}
