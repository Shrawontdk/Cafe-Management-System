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

  protected getApi(): string {
    return UserService.API;
  }
}
