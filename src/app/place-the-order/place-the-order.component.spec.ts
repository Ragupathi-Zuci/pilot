import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTheOrderComponent } from './place-the-order.component';

describe('PlaceTheOrderComponent', () => {
  let component: PlaceTheOrderComponent;
  let fixture: ComponentFixture<PlaceTheOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceTheOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceTheOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
