import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})

export class FriendComponent implements OnInit {

  friends:any;
  constructor( private httpClient: HttpClient ) {}

  getFriends(){
    this.httpClient.get<any>('https://api.covid19api.com/summary').subscribe(
      response => {
        console.log(response);
        this.friends = response;
      }
    );
  }
  
  ngOnInit(): void {
    this.getFriends();
  }

}
