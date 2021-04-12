import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private us:UserserviceService,
    private toastr:ToastrService) { }
  registerForm:any
submitted:any=false
  ngOnInit(): void { 
    this.registerForm=new FormGroup({
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
      useradmin:new FormControl(null,Validators.required)
    })
  }

  getControls(){
    return this.registerForm.controls;
  }

    onSubmit(){
      this.submitted=true;
      if(this.registerForm.valid){

        // if it is user
        if(this.registerForm.value.useradmin=="user")
        {
          delete this.registerForm.value.useradmin
          
          this.us.loginuser(this.registerForm.value).subscribe(
            res=>{
              if(res["message"]=="You are successfully logged"){
                localStorage.setItem("token",res["token"])
                localStorage.setItem("username",res["username"])
                this.toastr.success('you have succesfully logged','title')
                this.us.senduserdashboard(this.registerForm.value.username)
                this.route.navigateByUrl("/userdashboard")
              }
              else{
                this.toastr.error('your credentials are wrong','title')
              }
            },
            err=>{
              this.toastr.error('your credentials are wrong','title')
              console.log(err)
            }
          )

        }

        // admin
        if(this.registerForm.value.useradmin=="admin"){
          delete this.registerForm.value.useradmin
          console.log(this.registerForm.value)
          this.us.adminuser(this.registerForm.value).subscribe(
            res=>{
              if(res["message"]=="You are successfully logged"){
                localStorage.setItem("token",res["token"])
                localStorage.setItem("username",res["username"])
                this.toastr.success('you have succesfully logged','title')
                this.route.navigateByUrl("/admindashboard")
              }
              else{
                this.toastr.error('your credentials are wrong','title')
                
              }
            },
            err=>{
              this.toastr.error('your credentials are wrong','title')
              console.log(err)
            }
          )
        }
      }
    }
    navigateToRegister(){
           this.route.navigateByUrl("/register")
           
    }

}
