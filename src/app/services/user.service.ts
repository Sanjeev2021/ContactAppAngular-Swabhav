import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})

export class UserService {
    private url = "http://localhost:3000/api/v1/contactapp/user";
   

    constructor(private http: HttpClient) { }

    // viewUser() {
    //     const url =`${this.url}/getall/{page}`;
    //     return this.http.get(this.url);
    // }

   viewUser(page: number) {
       const url = `${this.url}/`;
       return this.http.get(url, {withCredentials: true});

    }
    
    // viewUser(page: number, id: string) {
    //     const url = `${this.url}/getall/${page}`;
    //     return this.http.get(url);
    // }

    searchUser(username: string) {
        const url = `${this.url}/get/${username}`;
        return this.http.get(url, {withCredentials: true});
    }
    

    deleteUser(id: string) {
        const url = `${this.url}/${id}`;
        return this.http.delete(url , {withCredentials: true});
      }
      
    updateUser(id: any, data: any) {
        const url = `${this.url}/${id}`;
        return this.http.put(url, data , {withCredentials: true});
    }   
    
    saveUser(data: any) {
        const url =`${this.url}/register`;
        return this.http.post(url, data , {withCredentials: true});

    }
}