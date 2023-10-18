import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContactinfoComponent } from './delete-contactinfo.component';

describe('DeleteContactinfoComponent', () => {
  let component: DeleteContactinfoComponent;
  let fixture: ComponentFixture<DeleteContactinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteContactinfoComponent]
    });
    fixture = TestBed.createComponent(DeleteContactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
