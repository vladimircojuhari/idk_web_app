import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRouteComponent } from './new-route.component';

describe('NewRouteComponent', () => {
  let component: NewRouteComponent;
  let fixture: ComponentFixture<NewRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
