import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(private http: HttpClient) {}

  getUsers() {
    const url = `${environment.apiUrl}/users`;
    return this.http.get(url).pipe(
      // delay(2000),
      map((response: any) => {
        return response
       
      })
    );
  }

  removeUser(id: any) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }

  addUser() {
    const user = {};
    return this.http.post(`${environment.apiUrl}/users`, user);
  }
}
