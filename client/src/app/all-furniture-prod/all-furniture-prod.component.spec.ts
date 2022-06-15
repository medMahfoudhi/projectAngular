import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFurnitureProdComponent } from './all-furniture-prod.component';

describe('AllFurnitureProdComponent', () => {
  let component: AllFurnitureProdComponent;
  let fixture: ComponentFixture<AllFurnitureProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFurnitureProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFurnitureProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
