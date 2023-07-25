import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '{driver_id}',
    component: MapComponent
  }
]

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MapModule { }
