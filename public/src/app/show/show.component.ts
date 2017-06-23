import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {
  sub = null;
  showTopicPrm = null;
  showTopic = null;
  errors = null;
  constructor(private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((param)=>{
      this.showTopicPrm = param;
    })
    this.getOneTopic();
  }

  getOneTopic(){
    console.log('getting topics')
    this._httpService.getOneTopic(this.showTopicPrm.id)
    .then((data)=>{
      console.log("Got data about one show Topic", data);
      if(data.message == "Success"){
        this.showTopic = data.topic;
      }
      else {
        this.errors = data.error.message;
      }
    })
    .catch((err)=>{
      console.log("Got an error getting show Topic", err);
      
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
