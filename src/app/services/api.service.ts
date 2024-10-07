import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../user-module/user-module.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL="https://jsonplaceholder.typicode.com/users";

  constructor(private clienteHttp:HttpClient) { }

  public getUsers():Observable<IUser[]>{
    return this.clienteHttp.get<IUser[]>(this.baseURL);
  }

  public getUserById(id: number):Observable<IUser>{
    return this.clienteHttp.get<IUser>('${this.baseURL}${id}');    
  }
}
