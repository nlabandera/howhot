import { Body, Controller, Get, Post } from '@nestjs/common';
import { Vote } from '@howhot/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('votes')
  getVotes() {
    return this.appService.getVotes();
  }

  @Post('votes')
  postVote(@Body() vote: Vote){
    return this.appService.postVote(vote);
  }

}
