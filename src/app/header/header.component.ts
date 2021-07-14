import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  isAthenticated = false;
  private userSub: Subscription;
  constructor(private dataStorageService : DataStorageService,
    private authservice: AuthService){

  }

  ngOnInit(){
    this.userSub = this.authservice.user.subscribe(user =>{
      console.log('[DEBUG]= USER');
      console.log(user);
      this.isAthenticated = !user  ? false:true;
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe;
  }

  onSaveData(){
    this.dataStorageService.storeRecipes();
  }

  onFecthData(){
    this.dataStorageService.fecthRecipes().subscribe();
  }

  onLogout(){
    this.authservice.logout();
  }
}
