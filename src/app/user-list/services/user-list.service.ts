import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../types/post';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const url = `${environment.apiUrl}/users`;
    return this.http.get<User[]>(url).pipe(
      delay(1000),
      map((response: User[]) => {
        return response;
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

  getPosts(userId: number): Observable<Post> {
    const url = `${environment.apiUrl}/posts?userId=${userId}`;
    return this.http.get<Post>(url).pipe(
      // delay(1000),
      map((response: Post) => {
        return response;
      })
    );
  }
}
