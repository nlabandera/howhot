import { Component, OnInit } from '@angular/core';
import { Vote } from '@howhot/api-interfaces';
import { VoteService } from '../vote/vote.service';

@Component({
  selector: 'howhot-show-votes',
  templateUrl: './show-votes.component.html',
  styleUrls: ['./show-votes.component.scss'],
})
export class ShowVotesComponent implements OnInit {

  votes:Vote[]=[];
  count: number[]=[0,0,0]

  constructor(private voteService: VoteService) { }

  showVotes(){
    return this.voteService.getVotes().subscribe(res => {
      this.votes = res;
      for(const v of this.votes){
        switch(v.vote){
          case 'ok':
            this.count[0]=this.count[0]+1;
            break;
          case 'cold':
            this.count[1]=this.count[1]+1;
            break;
          case 'hot':
            this.count[2]=this.count[2]+1;
            break;
        }
      }
      console.log(this.count)
    })
  }


  ngOnInit(): void {
    this.showVotes()
  }
}
