import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {DashboardService} from "../services/dashboard.service";
import {ToastService} from "../services/ToastService";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Alert, AlertType} from "../services/Alert";
import {GlobalConstants} from "../shared/global-constants";
import {MatCard} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCard,
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  responseMessage: any;
  data: any;
  dashBoardService = inject(DashboardService);
  toastService = inject(ToastService);
  ngxUiLoaderService = inject(NgxUiLoaderService);

  ngOnInit() {
    this.ngxUiLoaderService.start();
    this.dashBoardData();
  }

  ngAfterViewInit() {
  }

  private dashBoardData() {
    this.dashBoardService.getDetails().subscribe(
      (response: any) => {
        this.data = response;
        this.ngxUiLoaderService.stop();
      },
      (error: any) => {
        this.ngxUiLoaderService.stop();
        if (error.error.message) {
          this.responseMessage = error.error.message;
          this.toastService.showToastMessage(new Alert(AlertType.ERROR), this.responseMessage);
        } else {
          this.toastService.showToastMessage(new Alert(AlertType.ERROR), GlobalConstants.error.toString());
        }

      }
    );
  }
}
