import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { VoteService } from '../vote/vote.service';


@Component({
  selector: 'howhot-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  votantEmail= new FormControl('',[
  	Validators.required,
  	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);

  email!: string;
  vote!:string;

  constructor(
    private voteService: VoteService
  ){}

  login(){
    this.voteService.post({email: this.email, vote: ''})
  }

}
