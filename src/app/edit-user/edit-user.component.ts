import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  userId = ""
  firstName = ""
  email = ""
  data:any = {}

  constructor(private router:Router,private ar:ActivatedRoute,private httpClient:HttpClient,private toastr:ToastrService){
      this.userId = this.ar.snapshot.params["userId"]

      this.httpClient.get("https://meanprj1.onrender.com/public/getUserById/"+this.userId).subscribe(resp=>{
          this.data = resp
          this.firstName = this.data.data[0].firstName
          this.email = this.data.data[0].email
      })
  }
  
  updateUser(){
        
  }

}
