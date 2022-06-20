import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { States } from './states/state.entity';
import { StatesService } from './states/states.service';
import { Users } from './users/user.entity';
import { UsersService } from './users/users.service';


@Controller()
export class AppController {

  constructor(
    private readonly stateService: StatesService,
    // private readonly userService: UsersService,
    private appService: AppService
  ) { }

  @Post('vote')
  postVote(@Body() vote: States) {
    return this.stateService.postVote(vote)
  }
  // Returns the list of all the existing votes in the database
  @Get('votes')
  getVotes() {
    return this.stateService.getVotes();
  }

  // Return all the users which are associated with the stat
  // provided through 'state.id' by the request

  @Get('participants/:id')
  getParticipants(@Param('id') id: number) {
    console.log('llega', id)
    return this.stateService.getUsersOfVotes(id);
  }

  // @Get('participants')
  // getAllParticipants() {
  //   return this.stateService.getUsersOfVotes();
  // }

  /* @Post('user')
  async postUser(@Body() user:Users){
    return this.userService.postUser(user);
  }

  @Get('users')
  async getUsers(): Promise<Users[]>{
    return this.userService.getUsers();
  }
 */
}
