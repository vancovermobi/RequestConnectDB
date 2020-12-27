import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDBComponent } from './request-db.component';

describe('RequestDBComponent', () => {
  let component: RequestDBComponent;
  let fixture: ComponentFixture<RequestDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
