import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWatchesProdComponent } from './all-watches-prod.component';

describe('AllWatchesProdComponent', () => {
  let component: AllWatchesProdComponent;
  let fixture: ComponentFixture<AllWatchesProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWatchesProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWatchesProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
