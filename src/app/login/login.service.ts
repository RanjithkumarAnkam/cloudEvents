import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  loginurl = "http://localhost:3500/login";
  headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http) { }

  loginCheck(uname,pswd): Promise<any> {
    var data={
      usernamename:uname,
      password:pswd
    }
  
    return this.http.post(this.loginurl,JSON.stringify(data), {headers:this.headers}).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
