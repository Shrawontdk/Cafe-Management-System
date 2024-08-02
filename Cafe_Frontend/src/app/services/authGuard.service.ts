import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageUtil} from "../utils/local-storage-utils";
import {jwtDecode} from "jwt-decode";
import {ToastService} from "./ToastService";
import {Alert, AlertType} from "./Alert";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  router = inject(Router);
  toastMessage = inject(ToastService);

  constructor() {
  }

  isAuthenticated() {
    const token = LocalStorageUtil.getStorage().at;
    if (!token) {
      this.router.navigate(['/']);
      return false;
    } else {
      const decodedTokem = jwtDecode(token);
      const isTokenExpired = decodedTokem && decodedTokem.exp ? decodedTokem.exp < Date.now() / 1000 : false;
      if (isTokenExpired) {
        this.toastMessage.showToastMessage(new Alert(AlertType.ERROR), "Token expired.");
        LocalStorageUtil.clearStorage();
        return this.router.navigate(['/']);
      } else {
        return true;
      }
    }
  }

}
