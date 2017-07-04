import { Component, OnInit } from '@angular/core';
import { AuthService} from './../../auth/auth.service';
import { HttpService } from './../../http.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
