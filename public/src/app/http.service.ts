import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {
  
  constructor(private _http: Http) { }
  getOneUser(name){
    console.log('service is getting this user', name)
    return this._http.get('/users/'+name).map((data)=>data.json()).toPromise();
  }
  newUser(user){
    console.log('service sending new user', user);
    return this._http.post('/new_user', user).map(data => data.json()).toPromise();
  }
  getTopics(){
    return this._http.get('/topics').map((data)=>data.json()).toPromise()
  }

  createTopic(topic){
    console.log('service sending new topic', topic);
    return this._http.post('/topics', topic).map((data)=>data.json()).toPromise();
  }

  createOption(option){
    console.log('service sending new option', option);
    return this._http.post('/options', option).map((data)=>data.json()).toPromise();
  }

  getOneTopic(id){
    return this._http.get('/topics/'+id).map((data)=>data.json()).toPromise();
  }

  getOneOption(option){
    console.log('service sending new option', option);
    return this._http.get('/options/'+option).map((data)=>data.json()).toPromise();
  }

  updateTopic(id, topic){
    return this._http.put('/topics/' + id, topic).map((data)=>data.json()).toPromise();
  }

  updateOption(name, option){
    return this._http.put('/options/' + name, option).map((data)=>data.json()).toPromise();
  }
  deleteTopic(id){
    return this._http.delete('/topics/'+id).map((data)=>data.json()).toPromise();
  }
}
