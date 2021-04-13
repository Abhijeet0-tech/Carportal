import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartserviceService } from '../cartservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-hatchback',
  templateUrl: './hatchback.component.html',
  styleUrls: ['./hatchback.component.css']
})
export class HatchbackComponent implements OnInit {
hatchbackcars:any=[]
  constructor(private us:UserserviceService,private route:Router,private toast:ToastrService,private cs:CartserviceService) { }
  userobj:any
  emptyhatchback:any
  username:any
  carobj:any=[]
  searchTerm!: string;
  cartcount:any
  x=0
  searchText:any
  ngOnInit(): void {
    this.username=(localStorage.getItem("username"))
    this.username=(localStorage.getItem("username"))
    this.us.getuserbyusername(this.username).subscribe(
      res=>{
        if(res["message"]=="success"){
          this.userobj=res["userobj"]
          this.us.gethatchback().subscribe(
            res=>{
              this.carobj=res["message"]
              this.emptyhatchback=this.carobj.length
            },
            err=>{
              alert("retrive failed")
              console.log(err)
            }
          )
        }
        else{
          alert(res["message"])
          this.route.navigateByUrl("/login")
        }
      },
      err=>{
        alert("something went wrong")
        console.log(err)
      }
    )
    this.cartcount=this.cs.getCartcount()
}

logout()
{
      this.route.navigateByUrl("/home")
}

addtoCart(car:any){
car.username=this.username
this.us.addToCart(car).subscribe(
  res=>{
    if(res["message"]=="car added to cart successfully"){
            this.toast.success("car added to cart successfully")
            this.cs.setCartcount(++this.cartcount)             
          }
    else{
      this.toast.error(res["message"])
    }
  },
  err=>{
       console.log(err)
       this.toast.error(err)
  }

)
this.us.getusernameforcart(this.username)

}
cart(){
this.route.navigateByUrl("addtoCart")
}
navigateToSpecifications(car:any){
console.log(car)
  this.route.navigate(["/specifications",car.carname])
}

}

