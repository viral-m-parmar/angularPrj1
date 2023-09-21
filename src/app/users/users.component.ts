import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  
  apiResponse : any = {}
  users : Array<any> = []
  firstName = ""
  email = ""
  data : any = {}
  uId = ""
  visible:boolean = false

  constructor(private userService:UserService,private toaster:ToastrService,private router:Router){
    this.getAllUsers()
  }

  getAllUsers(){
    
    console.log("List users api called...");
    
    this.userService.getAllUsers().subscribe(resp=>{
      this.apiResponse = resp
      //console.log(this.apiResponse.data);  
      this.users = this.apiResponse.data;
    },err=>{
      console.log(err);
    })
  }

  deleteUser(userId:string){
    this.userService.deleteUser(userId).subscribe(resp=>{
      this.getAllUsers()
      this.toaster.success("","User Removed",{timeOut:3000})
    },err=>{
      console.log(err);
    })
  }

  showDialog(userId:string){
      
    console.log("hi");
        this.uId = userId
        this.userService.showDialog(userId).subscribe(resp=>{
        this.data = resp 
        console.log(this.data);
        this.firstName = this.data.data[0].firstName 
        this.email  = this.data.data[0].email 
        this.visible = true 
      })
  }

  editUser(userId:string){
    //alert(userId)
    this.router.navigateByUrl("/edituser/"+userId)
  }
}
