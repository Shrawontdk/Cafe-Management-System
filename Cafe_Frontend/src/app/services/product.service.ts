import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiUtils} from "../utils/api-utils";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient);
  static API = 'product';

  constructor() { }
  add(data: any){
    const req = ApiUtils.getRequest(`${this.API()}/add`);
    return this.http.post(req.url, data , {headers: req.header})
  }
  update(data: any){
    const req = ApiUtils.getRequest(`${this.API()}/update`);
    return this.http.post(req.url, data , {headers: req.header})
  }

  getProducts(){
    const req = ApiUtils.getRequest(`${this.API()}/get`);
    return this.http.get(req.url , {headers: req.header})
  }
  updateStatus(data: any){
    const req = ApiUtils.getRequest(`${this.API()}/update`);
    return this.http.post(req.url ,data, {headers: req.header})
  }
  delete(id: any){
    const req = ApiUtils.getRequest(`${this.API()}/delete/${id}`);
    return this.http.post(req.url ,id, {headers: req.header})
  }




  protected API(){
    return ProductService.API;
  }
}
