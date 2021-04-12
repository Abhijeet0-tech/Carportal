import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.css']
})
export class EditcarComponent implements OnInit {


carobj:any

  constructor(private us:UserserviceService ,private route:Router, private toast:ToastrService) { }

  ngOnInit(): void {
       this.carobj=this.us.sendeditcar()
  }
  onSubmit(ref:any)
  {
      this.us.updatecar(this.carobj).subscribe()
      console.log("hello")
  }
  Cancelupdate(){

     this.route.navigateByUrl("/allcarsaddedbyadmin")

  }
  Save(){
        this.toast.success("your changes has been saved successfully")
        this.route.navigateByUrl("/allcarsaddedbyadmin")
        this.us.updatecarafteredit(this.carobj).subscribe()

  }
}
