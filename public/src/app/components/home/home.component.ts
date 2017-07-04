import { Component, OnInit } from '@angular/core';
import {AuthService} from './../../auth/auth.service';
import { HttpService } from './../../http.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pets
  constructor(private _authService: AuthService, private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getPets()
    .then((data)=>{
      console.log("Getting pets", data);
      this.pets = data.pets;
    })
    .catch((err)=>{
      console.log("Got an error by doing getpets", err);
    })
  }

}
