import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from './../../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {
  sub = null;
  showTopicPrm = null;
  showPet = null;
  optionCounts = [];

  errors = null;
  constructor(private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((param)=>{
      this.showTopicPrm = param;
    })
    this.getOneTopic();
  }

  getOneTopic(){
    console.log('getting this pet', this.showTopicPrm.id )
    this._httpService.getOneTopic(this.showTopicPrm.id)
    .then((data)=>{
      this.showPet = data.pets;
      console.log("Got data about one showpet", this.showPet);
    })
    .catch((err)=>{
      console.log("Got an error getting show Topic", err);
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
