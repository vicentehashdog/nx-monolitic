import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '@nex-test/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('api/users');
  }

  saveUser(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>('api/users', user);
  }
}
