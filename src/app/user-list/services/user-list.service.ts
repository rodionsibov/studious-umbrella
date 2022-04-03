import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { CurrentUser } from 'src/app/shared/types/current-user';
import { environment } from 'src/environments/environment';
import { PostRequest } from '../types/post-request';
import { UserListResponse } from '../types/user-list-response';
import { UserRequest } from '../types/user-request';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserRequest[]> {
    const url = `${environment.apiUrl}/users`;
    return this.http.get<UserRequest[]>(url).pipe(
      delay(1000),
      map((response: UserRequest[]) => {
        return response;
      })
    );
  }

  removeUser(id: any) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }

  updateUser(data: UserRequest): Observable<CurrentUser> {
    const url = `${environment.apiUrl}/users/${data.id}`;
    return this.http
      .post<UserListResponse>(url, data)
      .pipe(map((response: UserListResponse) => response.user));
  }

  getPosts(userId: number): Observable<PostRequest> {
    const url = `${environment.apiUrl}/posts?userId=${userId}`;
    return this.http.get<PostRequest>(url).pipe(
      // delay(1000),
      map((response: PostRequest) => {
        return response;
      })
    );
  }
}
