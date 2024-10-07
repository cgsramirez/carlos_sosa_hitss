import { Component, OnInit } from '@angular/core';
import { IUser } from '../user-module/user-module.module';
import { ApiService } from '../services/api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  userslits: IUser[]= [];
  constructor(private _apiservice:ApiService) {  } 

  ngOnInit(): void {
      
    this._apiservice.getUsers().subscribe( (data:IUser[]) => {
      console.log(data);
      this.userslits=data;
    });
  }
}
