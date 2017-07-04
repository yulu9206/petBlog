import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing'; 
import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/show/show.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewComponent } from './components/new/new.component';

import { AuthGuardService } from './auth/auth.guard';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

// import { AUTH_PROVIDERS} from 'angular2-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ShowComponent,
    NewComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService, HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
