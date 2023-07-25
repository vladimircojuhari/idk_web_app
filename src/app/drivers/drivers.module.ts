import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers.component';
import { RouterModule, Routes } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { NewDriverComponent } from './components/new-driver/new-driver.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DriverListComponent } from './components/drivers-list/driver-list/driver-list.component';
import { TableModule } from 'primeng/table';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import {MessagesModule} from 'primeng/messages';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
let routes: Routes = [
  {
    path: '',
    component: DriversComponent,
  },
]

@NgModule({
  declarations: [
    DriversComponent,
    NewDriverComponent,
    DriverListComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    MessagesModule,
    TableModule,
    PanelModule,
    DialogModule,
    ConfirmPopupModule,
    ButtonModule,
    TooltipModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ConfirmationService
  ]
})
export class DriversModule { }
