import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import {  SmartHomeServiceService} from './services/smart-home-service.service';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { ViewHouseComponent } from './view-house/view-house.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'view-house', component: ViewHouseComponent},
  { path: 'home', component: HomeComponent},
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BedroomComponent,
    KitchenComponent,
    LivingroomComponent,
    ViewHouseComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [SmartHomeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
