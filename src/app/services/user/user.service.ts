
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { baseURL } from './../../shared/baseurl';
import { ProcessHttpmsgService } from './../process-httpmsg/process-httpmsg.service';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: Http,
    public storage: Storage,
    private processHttpMsgService: ProcessHttpmsgService) {
    console.log('Hello UserProvider Provider');
  }

  loginUser(username: string, password: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    //headers.append('Authorization', loginInfo);
    let options = new RequestOptions({ headers: headers });
    let paramText = 'login?username=' + username + '&password=' + password;
    return this.http.post(baseURL + paramText , {}, options)
    .pipe(map(data => {} )).subscribe(res => { 
      console.log('[INFO] ......  Authorization', this.processHttpMsgService.extractData(res));
      this.storeUserToken(res);
      return this.processHttpMsgService.extractData(res); 
    })
    .catch(error => { 
      console.log('[ERROR] ...... UserProvider.loginUser()', error);
      return this.processHttpMsgService.handleError(error);    
    })
  }

  storeUserToken(res: Response) {
    let obj = this.processHttpMsgService.extractData(res);
    let body = JSON.stringify(obj);
    console.log("[INFO] ...... storeUserToken 1 ", obj.token); 
    /*console.log("[INFO] ...... storeUserToken 2 ", body); 
    console.log("[INFO] ...... storeUserToken 3 ", res); 
    console.log("[INFO] ...... storeUserToken ", JSON.parse(body));    
    this.storage.set('token', JSON.parse(body)._body);*/
    this.storage.set('token', obj.token);
  }

  logoutUser(headerArgument: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', headerArgument);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(baseURL + 'logout', {}, options)
    .map(res => { 
      console.log("[INFO] ...... Logout: Successful response from server");
      return this.processHttpMsgService.extractData(res);
    })
    .catch(error => { 
      console.log('[ERROR] ...... Logout: Unsuccessful response from server', error);
      return this.processHttpMsgService.handleError(error);    
    })    
  }
  
  updatePassword(headerArgument: string, password: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', headerArgument);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(baseURL + 'updatePassword?password=' + password, {}, options)
    .map(res => { 
      console.log('[INFO] ......  Authorization', this.processHttpMsgService.extractData(res));
      this.storeUserToken(res);
      return this.processHttpMsgService.extractData(res); 
    })
    .catch(error => { 
      console.log('[ERROR] ...... UserProvider.updatePassword()', error);
      return this.processHttpMsgService.handleError(error);    
    })   
  }
  
  
  /* loginUser(loginInfo: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded')
    headers.append('Authorization', loginInfo);
    let options = new RequestOptions({ headers: headers });
    return this.http.post(baseURL + 'login?username=test01&password=abc123&groupname=1', {}, options)
    .map(res => { 
      console.log('[INFO] ......  Authorization', this.processHttpMsgService.extractData(res));
      //this.storeUserToken(res);
      return this.processHttpMsgService.extractData(res); 
    })
    .catch(error => { 
      console.log('[ERROR] ...... UserProvider.loginUser()', error);
      return this.processHttpMsgService.handleError(error);    
    })
  } */

  /* storeUserToken(res: Response) {
    let obj = this.processHttpMsgService.extractData(res);
    console.log("[INFO] ...... storeUserToken ", obj.token);    
    this.storage.set('token', obj.token);
  } */

}
