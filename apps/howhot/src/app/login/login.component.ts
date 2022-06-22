import { Component } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
import { VoteService } from '../vote/vote.service';


@Component({
  selector: 'howhot-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  email!: string;
  vote!:string;

  constructor(
    private voteService: VoteService
  ){}

  login(){
    this.voteService.post({email: this.email, vote: ''})
  }

}
