import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

// read token from local storage
    let token= localStorage.getItem("token")
// if token found
if(token){
  // add token to header of req obj
  let transformedreq= req.clone({
    headers:req.headers.set("authorization","Bearer "+token)
  })

    return next.handle(transformedreq)
}

// if token not found
else{
  // forward req obj to backend
   return next.handle(req)
}
  }
}


