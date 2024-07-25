import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FullComponent} from "./layouts/full/full.component";

export const routes: Routes = [

  { path: '', component: HomeComponent },
  {
    path: 'cafe',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/cafe/dashboard',
        pathMatch: 'full',
      },
      // {
      //   path: '',
      //   loadChildren:
      //     () => import('./material-component/material.module').then(m => m.MaterialComponentsModule),
      // },
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      // }
    ]
  },
  { path: '**', component: HomeComponent }
];
