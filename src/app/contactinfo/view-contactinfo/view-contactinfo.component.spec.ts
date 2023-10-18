import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactinfoComponent } from './view-contactinfo.component';

describe('ViewContactinfoComponent', () => {
  let component: ViewContactinfoComponent;
  let fixture: ComponentFixture<ViewContactinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewContactinfoComponent]
    });
    fixture = TestBed.createComponent(ViewContactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
