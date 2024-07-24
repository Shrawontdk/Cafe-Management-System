import {inject, Injectable} from '@angular/core';
import {environment} from "@env/environment";
import {ApiConfig} from "../utils/api-config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = ApiConfig.URL;
  http = inject(HttpClient);

  constructor() { }
}
