import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ContactinfoModule } from "../contactinfo/contactinfo.module";

@Injectable({
    providedIn: "root",
})

export class ContactInfoService {
    private url = "http://localhost:3000/api/v1/contactapp/";
    constructor(private http: HttpClient) { }

    // viewUser() {
    //     const url =`${this.url}/getall/{page}`;
    //     return this.http.get(this.url);
    // }

    viewContactinfo(userId: any , page: number) {
        //  const url = `${this.url} + userId + "/contacts/getall/${page}`;
        const url = `http://localhost:3000/api/v1/contactapp/contactinfo/`; // Adjust the URL structure
        // const url = `${this.url}/getall/${page}`;
        return this.http.get(url);
    }
    
    

    // deleteContact(id: string) {
    //     const url = `${this.url}/delete/${id}`;
    //     return this.http.delete(url);
    //   }

    deleteContactinfo(userId:any , contactId:any){

        const url = `http://localhost:3000/api/v1/contactapp/contactinfo/${contactId}`; //add the contact id after delete 
       // const url = `http://localhost:3000/api/v1/contactApp/${userId}/contacts/delete`;
        return this.http.delete(url);
    }

    updateContactinfo(ReferId: any, userId: any, contactId: any, data: any) {
        const contactinfo = {
            ContactRefer: Number(ReferId),
            Type: data.contactinfotype,
            Value: data.contactinfovalue
        }

        const url = `http://localhost:3000/api/v1/contactapp/contactinfo/${contactId}`; // add the contact id you want to update
        return this.http.put(url, contactinfo);
    }   
    
    saveContactinfo( data: any) {
        const url = this.url  + 'contactinfo/'  ;
        const contactinfo = {
            ContactRefer: Number(data.contactid),
            Type: data.contactinfotype,
            Value: data.contactinfovalue
        }
        return this.http.post(url, contactinfo);

    }

    searchContactinfoType(ContactName : string) {
        const url = `${this.url}/contactinfo/type/${ContactName}`;
        return this.http.get(url, {withCredentials: true});
    }

    searchContactinfoValue(ContactName: string) {
        const url = `${this.url}/contactinfo/value/${ContactName}`;
        return this.http.get(url, {withCredentials: true});
    }

}

