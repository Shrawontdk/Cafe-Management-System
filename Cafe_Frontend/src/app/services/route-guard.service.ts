import {inject, Injectable} from '@angular/core';
import {AuthServiceService} from "./auth-service.service";
import {Router} from "@angular/router";
import {ToastService} from "./ToastService";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {
  authService = inject(AuthServiceService);
  router = inject(Router);
  toaster = inject(ToastService)

  constructor() { }
}
