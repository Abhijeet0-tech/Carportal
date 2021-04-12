import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  carobj:any=[]
  searchTerm:any;
    constructor(private us:UserserviceService,private route:Router) { }
  
    ngOnInit(): void {
         
                this.us.getcar().subscribe(
                  res=>{
                    this.carobj=res["message"]
                  },
                  err=>{
                    alert("retrive failed")
                    console.log(err)
                  }
                )
              }
              
          
            
  
    
    navigateToSpecifications(car:any){
        this.route.navigate(["/specifications",car.carname])
    }
  }
  
  
  
  