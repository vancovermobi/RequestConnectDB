import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetquadtComponent } from './ketquadt.component';

describe('KetquadtComponent', () => {
  let component: KetquadtComponent;
  let fixture: ComponentFixture<KetquadtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KetquadtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KetquadtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
