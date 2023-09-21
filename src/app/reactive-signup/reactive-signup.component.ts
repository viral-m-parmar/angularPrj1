import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent {

  myForm : FormGroup

  constructor(){
    this.myForm = new FormGroup({
      firstName : new FormControl("",Validators.required),
      email : new FormControl("",[Validators.required,this.emailValid]),
      password : new FormControl("",[Validators.required,Validators.minLength(8)])
    })
  }

  saveUser(){
   console.log(this.myForm.value);
   console.log(this.myForm.valid);
   
  }

  emailValid(control:AbstractControl){
    
    if(control.hasError('required')){       
      return {
        emailInvalid:false 
      }
    }else{
      if(control.value.endsWith("@gmail.com") && control.value.length > 11) {
        return {
          emailInvalid:false
        }
      }else{
        return {
          emailInvalid:true
        }
      }
    }
    
  }
}
