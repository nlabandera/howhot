import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vote } from '@howhot/api-interfaces';
import { Observable } from 'rxjs';
import { Body } from '@nestjs/common';

@Component({
  selector: 'howhot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  votes$ = this.http.get<Vote>('/api/votes');
  // vote$ = this.http.post<Vote>('/api/votes', Body);

  constructor(private http: HttpClient) {}

  getVotes(): Observable<Vote>{
    return this.votes$;
  }



}
