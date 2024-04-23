import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationPage } from './validation.component';

describe('ValidationComponent', () => {
  let component: ValidationPage;
  let fixture: ComponentFixture<ValidationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
