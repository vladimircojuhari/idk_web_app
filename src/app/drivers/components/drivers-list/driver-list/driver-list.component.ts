import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, Message } from 'primeng/api';
import { Driver } from 'src/models/driver/driver.model';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {

  @Input() drivers: Driver[] = [];
  @Output() deleteDriverEvent: EventEmitter<Driver> = new EventEmitter<Driver>();

  notification_msg: Message[] = [];

  constructor(
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {

  }

  onRowEditInit(driver: Driver) {

  }

  onRowEditSave(driver: Driver) {

  }

  onRowEditCancel(driver: Driver, index: number) {

  }


  onSeeMap(driver: Driver) {

  }

  onRowDelete(driver: Driver, event: Event) {
    this.confirmationService.confirm({
      target: <any>event.target,
      message: 'Are you sure that you want to delete selected driver?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteDriverEvent.emit(driver);
        this.drivers = this.drivers.filter(el => el._id != driver._id);
        this.notification_msg = [{
          closable: true,
          severity: 'info',
          detail: 'Driver was deleted'
        }];

        setTimeout(() => {
          this.notification_msg = [];
        }, (2000));

      },
      reject: () => {
        console.log('deleted')
      }
    })
  }
}
