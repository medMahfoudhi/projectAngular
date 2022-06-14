import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllElectProductsComponent } from './all-elect-products.component';

describe('AllElectProductsComponent', () => {
  let component: AllElectProductsComponent;
  let fixture: ComponentFixture<AllElectProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllElectProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllElectProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
