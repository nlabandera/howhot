import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vote } from '@howhot/api-interfaces';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  votes: Vote[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getVotes():Observable<Vote[]>{
    return this.httpClient.get<Vote[]>('/api/votes');
  }

/* V1 */
  post(vote: Vote) {
    this.httpClient.post<Vote[]>('/api/votes',vote).subscribe(data => this.votes = data)
  }

/* v2 */
  postVote(vote:Vote):Observable<Vote>{
    return this.httpClient.post<Vote>('/api/votes',vote).pipe(
      tap((newVote:Vote) => console.log(newVote.email, newVote.vote))
    )
  }

}
