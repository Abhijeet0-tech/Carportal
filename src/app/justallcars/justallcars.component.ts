import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-justallcars',
  templateUrl: './justallcars.component.html',
  styleUrls: ['./justallcars.component.css']
})
export class JustallcarsComponent implements OnInit {

  carobj:any=[]
  constructor(private us:UserserviceService,private route:Router) { }
  
  ngOnInit(): void {
  
}
testDrive(){
  this.route.navigateByUrl("/testdrive")
}
Buyacar(){
  this.route.navigateByUrl("/bookacar")
}

addtoCart(car:any){
this.us.addToCart(car).subscribe()
}

}
