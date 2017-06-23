import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  sub = null;
  editTopicPrm = null;
  edittopic = null;
  errors = null;
  constructor(private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((param)=>{
      this.editTopicPrm = param;
    })
    this.getOneTopic();
  }
   getOneTopic(){
    this._httpService.getOneTopic(this.editTopicPrm.id)
    .then((data)=>{

      console.log("Got data about one edit Topic", data);
      if(data.message == "Success"){
        this.edittopic = data.topic;
      }
      else {
        this.errors = data.error.message;
      }
      
    })
    .catch((err)=>{
      console.log("Got an error getting edit topic", err);
      
    })
  }
  updateTopic(){
    console.log("changed our Topic", this.edittopic);
    this._httpService.updateTopic(this.editTopicPrm.id, this.edittopic)
    .then((data)=>{
      console.log("Got back from updating", data);
      
    })
    .catch((err)=>{
      console.log("Got an error while updating", err);
      
    })
    
  }

  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
