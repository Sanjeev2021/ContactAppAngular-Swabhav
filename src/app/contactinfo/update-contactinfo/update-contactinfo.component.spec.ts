import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactinfoComponent } from './update-contactinfo.component';

describe('UpdateContactinfoComponent', () => {
  let component: UpdateContactinfoComponent;
  let fixture: ComponentFixture<UpdateContactinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateContactinfoComponent]
    });
    fixture = TestBed.createComponent(UpdateContactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
