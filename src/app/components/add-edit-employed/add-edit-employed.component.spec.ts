import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmployedComponent } from './add-edit-employed.component';

describe('AddEditEmployedComponent', () => {
  let component: AddEditEmployedComponent;
  let fixture: ComponentFixture<AddEditEmployedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEmployedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEmployedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
