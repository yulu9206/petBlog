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
    console.log('getting topics')
    this._httpService.getOneTopic(this.showTopicPrm.id)
    .then((data)=>{
      console.log("Got data about one show Topic", data);
      if(data.message == "Success"){
        this.showTopic = data.topic;
        this.getOneOption(this.showTopic.option1);
        this.getOneOption(this.showTopic.option2);
        this.getOneOption(this.showTopic.option3);
        this.getOneOption(this.showTopic.option4);
      }
      else {
        this.errors = data.error.message;
      }
    })
    .catch((err)=>{
      console.log("Got an error getting show Topic", err);
      
    })
  }

  getOneOption(option){
    console.log('getting options')
    this._httpService.getOneOption(option)
    .then((data)=>{
      console.log("Got data about one show Option", data);
      if(data.message == "Success"){
         this.optionCounts.push(data.option.count);
      }
      else {
        this.errors = data.error.message;
      }
    })
    .catch((err)=>{
      console.log("Got an error getting show option", err);
    })
  }
  
  vote(option){
    console.log('voting options')
    this._httpService.getOneOption(option)
    .then((data)=>{
      console.log("Got data about one vote Option", data);
      if(data.message == "Success"){
         data.option.count += 1;
         console.log("now count is ", data.option.count);
         this._httpService.updateOption(option, data.option)
        .then((data)=>{
        console.log("Got data about one show Option", data);
        if(data.message == "Success"){
          this.optionCounts = [];
          this.getOneTopic();
        }
        else {
          this.errors = data.error.message;
        }
        })
        .catch((err)=>{
          console.log("Got an error getting show option", err);
        })
      }
      else {
        this.errors = data.error.message;
      }
    })
    .catch((err)=>{
      console.log("Got an error getting show option", err);
    })    
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
