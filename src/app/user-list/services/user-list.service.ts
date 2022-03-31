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
        return response.map((item: any) => ({
          id: item.id,
          username: item.username,
          email: item.email,
          name: item.name,
          street: item.address.street,
          suite: item.address.suite,
          city: item.address.city,
          zipcode: item.address.zipcode,
          phone: item.website,
          website: item.website,
          companyName: item.company.name,
          catchPhrase: item.company.catchPhrase
        }));
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
