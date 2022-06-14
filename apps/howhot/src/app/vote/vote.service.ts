import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vote } from '@howhot/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  // votes: Vote[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  post(vote: [Vote]) {
    this.httpClient.post('/api/votes',vote)
  }

}
