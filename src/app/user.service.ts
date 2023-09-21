import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  getAllUsers():Observable<any>{
    return this.httpClient.get("https://meanprj1.onrender.com/public/getAllUsers")
  }

  deleteUser(userId:string){
    return this.httpClient.delete("https://meanprj1.onrender.com/public/deleteUser/"+userId)
  }
  
  showDialog(userId:string){
    return this.httpClient.get("https://meanprj1.onrender.com/public/getUserById/"+userId)
  }

}
