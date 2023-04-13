import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployedComponent } from './view-employed.component';

describe('ViewEmployedComponent', () => {
  let component: ViewEmployedComponent;
  let fixture: ComponentFixture<ViewEmployedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
