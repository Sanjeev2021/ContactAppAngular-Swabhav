import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})

export class ContactService {
    private url = "http://localhost:3000/api/v1/contactapp/contact";
    constructor(private http: HttpClient) { }

    // viewUser() {
    //     const url =`${this.url}/getall/{page}`;
    //     return this.http.get(this.url);
    // }

    viewContact(userId: any , page: number) {
        //  const url = `${this.url} + userId + "/contacts/getall/${page}`;
        // const url = this.url+ '/' + userId ;
         // Adjust the URL structure
         const url = `${this.url}/`;
        // const url = `${this.url}/getall/${page}`;
        return this.http.get(url);
    }
    
    

    // deleteContact(id: string) {
    //     const url = `${this.url}/delete/${id}`;
    //     return this.http.delete(url);
    //   }

    deleteContact(userId:any , contactId:any){
        // const url = `${this.url} +  userId + "/contacts/delete/${contactId}"`;
        //  const url = this.url +  userId + "/{id}";
         const url = `${this.url}/${contactId}`;
        // const url = `http://localhost:3000/api/v1/contactApp/${userId}/contacts/delete/5`; //add the contact id after delete 
       // const url = `http://localhost:3000/api/v1/contactApp/${userId}/contacts/delete`;
        return this.http.delete(url);
    }
      
    updateContact(userId: number, contactId: any, data: any) {
         const url = `${this.url}/${contactId}`;

         const contact = {
            FullName: data.contactname,
            UserId: userId
         }

        return this.http.put(url, contact);
    }   
    
    saveContact(userId:number, data: any) {
        const url = `${this.url}/` ;
//pass the user id so that foriegn key is not null
        const contact = {
            FullName: data.contactname,
            UserId: userId
        }
        
        return this.http.post(url, contact);

    }

    searchContact ( contactname : string) {
        const url = `${this.url}/get/${contactname}`;
        return this.http.get(url, {withCredentials: true});
    }
}