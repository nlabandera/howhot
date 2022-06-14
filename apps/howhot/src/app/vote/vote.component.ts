import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VoteService } from './vote.service';

@Component({
  selector: 'howhot-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss'],
})
export class VoteComponent implements OnInit {

  email!: string;
  vote!: string;
  id!: number

  constructor(
    private voteService: VoteService
  ) {}

  postVote(){
    this.voteService.post([{email: this.email, vote: this.vote}])
    console.log('new vote:'+this.email, this.vote)
  }

  ngOnInit(): void {
    console.log('works')
  }
}
