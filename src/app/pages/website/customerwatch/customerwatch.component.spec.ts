import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerwatchComponent } from './customerwatch.component';

describe('CustomerwatchComponent', () => {
  let component: CustomerwatchComponent;
  let fixture: ComponentFixture<CustomerwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerwatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
