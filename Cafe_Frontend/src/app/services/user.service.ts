import {inject, Injectable} from '@angular/core';
import {environment} from "@env/environment";
import {ApiConfig} from "../utils/api-config";
import {HttpClient} from "@angular/common/http";
import {ApiUtils} from "../utils/api-utils";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);
  static API = 'user';


  constructor() {

  }

  signUp(data: any) {
    const req = ApiUtils.getRequest(`${this.getApi()}/signUp`)
    return this.http.post(req.url, data, {headers: req.header});
  }

  forgotPassword(data: any) {
    const req = ApiUtils.getRequest(`${this.getApi()}/forgotPassword`)
    return this.http.post(req.url, data, {headers: req.header});
  }

  login(data: any) {
    const req = ApiUtils.getRequest(`${this.getApi()}/login`)
    return this.http.post(req.url, data, {headers: req.header});
  }

  checkToken() {
    const req = ApiUtils.getRequest(`${this.getApi()}/checkToken`)
    return this.http.get(req.url, {headers: req.header});
  }

  changePassword(data: any) {
    const req = ApiUtils.getRequest(`${this.getApi()}/changePassword`)
    return this.http.post(req.url, data, {headers: req.header});
  }

  getUser(){
    const req = ApiUtils.getRequest(`${this.getApi()}/get`)
    return this.http.get(req.url, {headers: req.header});
  }

  update(data: any){
    const req = ApiUtils.getRequest(`${this.getApi()}/update`)
    return this.http.post(req.url, data, {headers: req.header});
  }

  protected getApi(): string {
    return UserService.API;
  }
}
