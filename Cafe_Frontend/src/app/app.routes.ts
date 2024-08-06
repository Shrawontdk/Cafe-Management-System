import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FullComponent} from "./layouts/full/full.component";
import {RouteGuardService} from "./services/authenitication/route-guard.service";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CategoryService} from "./services/category.service";
import {ManageCategoryComponent} from "./manage-category/manage-category.component";

export const routes: Routes = [

  {path: '', component: HomeComponent},
  {
    path: 'cafe',
    component: FullComponent,
    canActivate: [RouteGuardService],
    children: [
      {
        path: '',
        redirectTo: '/cafe/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'category',
        component: ManageCategoryComponent,
      },
    ]
  },

  {path: '**', component: HomeComponent}
];
