import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Votes } from './votes/vote.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('votes')
  getVotes() {
    return this.appService.getVotes();
  }

  @Post('votes')
  postVote(@Body() vote: Votes){
    return this.appService.postVote(vote);
  }

}
