import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandnameComponent } from './brandname.component';

describe('BrandnameComponent', () => {
  let component: BrandnameComponent;
  let fixture: ComponentFixture<BrandnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
