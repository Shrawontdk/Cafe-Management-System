import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {BestSellerComponent} from "../best-seller/best-seller.component";

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
export class HomeComponent {

}
