import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginResponse , ResponseToken } from '../Interfaces/User';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})




export class RegisterService {
  cs : any;
  url = 'http://localhost:3000/api/v1/contactapp/user/';
  constructor(
    private http: HttpClient ,
     cookieservice: CookieService
     ) {
      this.cs = cookieservice;
  }

  register(data: any) {
    return this.http.post(this.url + 'register', data);
  }

  login(data: any): Observable<loginResponse> {
    this.http
      .post('http://localhost:3000/api/v1/contactapp/user/login', data, {
        observe: 'response',
      })
      .subscribe(
        (response) => {
          // console.log(response);
          const responseBody = response.body as ResponseToken; // Type assertion
          // console.log(responseBody.token);
          localStorage.setItem('token', responseBody.token);
          this.cs.set('token', responseBody.token);
  

         
        },
        (error) => {
          console.error(error);
        }
      );

    return this.http.post<loginResponse>(
      'http://localhost:3000/api/v1/contactapp/user/getId',
      data
    );
  }
}
