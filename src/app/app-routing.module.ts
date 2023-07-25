import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '', component: HomeComponent,
        title: 'Home'
      },
      {
        path: 'drivers',
        loadChildren: () => import('./drivers/drivers.module').then((m) => m.DriversModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./map/map.module').then((m) => m.MapModule)
      },
      {
        path: 'routes',
        loadChildren: () => import('./routes/routes.module').then((m) => m.RoutesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
