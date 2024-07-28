import {Component, inject, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {BestSellerComponent} from "../best-seller/best-seller.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon,
    BestSellerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dialog = inject(MatDialog);
ngOnInit() {
}

handleSignupAction() {
  const dialogConfig = new MatDialogConfig() ;
  dialogConfig.width = "650px";
  this.dialog.open(SignUpComponent, dialogConfig);
}
}
