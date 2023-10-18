import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})

export class AdminService {
    private url = "http://localhost:3000/api/v1/contactapp/admin";
   

    constructor(private http: HttpClient) { }

    // viewUser() {
    //     const url =`${this.url}/getall/{page}`;
    //     return this.http.get(this.url);
    // }

   viewAdmin(page: number) {
       const url = `${this.url}/`;
       return this.http.get(url, {withCredentials: true});

    }
    
    // viewUser(page: number, id: string) {
    //     const url = `${this.url}/getall/${page}`;
    //     return this.http.get(url);
    // }
    

   searchAdmin(username: string) {
    const url = `${this.url}/get/${username}`;
    return this.http.get(url, {withCredentials: true});
   }
}