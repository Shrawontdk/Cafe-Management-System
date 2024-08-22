import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {DashboardService} from "../services/dashboard.service";
import {ToastService} from "../services/ToastService";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {Alert, AlertType} from "../services/Alert";
import {GlobalConstants} from "../shared/global-constants";
import {MatCard} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {PieChartModule} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCard,
    RouterLink,
    PieChartModule
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
  view: [number, number] = [700, 400];
  colorScheme: any = {
    domain: ['#F45123', '#B523F4', '#10E9AE', '#2D23F4', '#ADD8E6', '#808000']
  };
  datas= [];

  ngOnInit() {
    this.ngxUiLoaderService.start();
    this.dashBoardData();
    this.data = [
      { "name": "Germany", "value": 8940000 },
      { "name": "USA", "value": 5000000 },
      { "name": "France", "value": 7200000 }
    ];

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
