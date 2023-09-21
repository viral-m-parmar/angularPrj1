import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  x : number = 100  // send this x to HTML page

  firstName = ""
  email = ""
  password = ""

  // to call the rest api in here use HttpClient Class...
  constructor(private toastr:ToastrService,private router:Router,private httpClient:HttpClient){}

  signup(){
    console.log(this.firstName+" "+this.email+" "+this.password);

    let data = {
      "firstName" : this.firstName,
      "email" : this.email,
      "password" : this.password
    }

    // DB -> call rest api
    this.httpClient.post("https://meanprj1.onrender.com/public/signupDb",data).subscribe(resp=>{
      console.log(resp);
    },error=>{
      console.log(error);
      
    })

    this.toastr.success("Signup Done","",{timeOut:3000})
    this.router.navigateByUrl("/login")
  }

}
