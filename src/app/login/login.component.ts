import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email : string = ""
  password : string = ""
  data : any = {}

  constructor(private httpClient:HttpClient,private toaster:ToastrService,private router:Router){}
  
  login(){
    
    console.log("email =>",this.email);
    console.log("password =>",this.password);
    
    let data = {
      "email":this.email,
      "password":this.password
    };
    
    this.httpClient.post("https://meanprj1.onrender.com/public/loginDb",data).subscribe(resp=>{
    
      console.log(data);
    
      this.data = resp;
      if(this.data.rcode == -9){
        this.toaster.error(this.data.msg,"",{timeOut:3000})
      }else if(this.data.rcode == 200){
        this.toaster.success("Login Done","",{timeOut:3000})
        this.router.navigateByUrl("/home");
      }
    },err=>{
      console.log(err);
    });

  }

}
