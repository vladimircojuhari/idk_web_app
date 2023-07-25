import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Driver } from 'src/models/driver/driver.model';

@Component({
  selector: 'app-new-driver',
  templateUrl: './new-driver.component.html',
  styleUrls: ['./new-driver.component.scss']
})

export class NewDriverComponent implements OnInit {

  @Output() onSaveEvent = new EventEmitter<Driver>();

  driver: Driver = new Driver();

  constructor() { }

  ngOnInit(): void {

  }

  save() {
    this.onSaveEvent.emit(this.driver);
  }
}
