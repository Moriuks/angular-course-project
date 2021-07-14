import { User } from './user.model';
import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { exhaustMap } from 'rxjs/operators';
import { take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler){

    return this.authService.user.pipe
    (take(1),
      exhaustMap(user => {
        // login request
        if(!user){
          return next.handle(req);
        }
        //only use if you have a user token
        const modifiedreq = req.clone({params: new HttpParams().set('auth', user.token)});
        return next.handle(modifiedreq);
      }));



  }

}
