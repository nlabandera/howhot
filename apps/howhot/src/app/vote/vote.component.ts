import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vote } from '@howhot/api-interfaces';
import { VoteService } from './vote.service';

@Component({
  selector: 'howhot-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {
  votes: Vote[]= [];
  email!: string;
  states: string[]=['ok','cold','hot'];
  vote!: string;
  id!: number;

  constructor(
    private voteService: VoteService,
    private http: HttpClient
  ) {}


  /* v1 */
  postVote(){
    // this.voteService.post({email: "test3@tmail.com", vote: "ok"})
    this.voteService.post({email: this.email, vote:this.vote})
  }

  /* v2 */
  post(email:string, vote:string):void{
    if(!email && !vote){return;}
    this.voteService.postVote({email, vote} as Vote).subscribe(
      data => {this.votes.push(data)}
    )

  }


  ngOnInit(): void {
    console.log('works')
    // this.http.post<Vote[]>('/api/votes',{email: "test@test.com", vote: "ok"}).subscribe(req => this.votes = req);
}
}
