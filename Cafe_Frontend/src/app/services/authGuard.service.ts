import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageUtil} from "../utils/local-storage-utils";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  router = inject(Router);

  constructor() {
  }

  isAuthenticated() {
    const token = LocalStorageUtil.getStorage().at;
    if (!token) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
