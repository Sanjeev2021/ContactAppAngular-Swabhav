import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactinfoComponent } from './add-contactinfo.component';

describe('AddContactinfoComponent', () => {
  let component: AddContactinfoComponent;
  let fixture: ComponentFixture<AddContactinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactinfoComponent]
    });
    fixture = TestBed.createComponent(AddContactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
