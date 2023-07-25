import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { RouterModule, Routes } from '@angular/router';
import { NewRouteComponent } from './components/new-route/new-route.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { RouteService } from 'src/services/routes/routes.service';
import { RoutesListComponent } from './components/routes-list/routes-list.component';

const routes: Routes = [
  {
    path: '',
    component: RoutesComponent
  }
]

@NgModule({
  declarations: [
    RoutesComponent,
    NewRouteComponent,
    RoutesListComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    RouteService
  ]
})
export class RoutesModule { }
