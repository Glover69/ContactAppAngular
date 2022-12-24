import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenumberDisplayComponent } from './phonenumber-display.component';

describe('PhonenumberDisplayComponent', () => {
  let component: PhonenumberDisplayComponent;
  let fixture: ComponentFixture<PhonenumberDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonenumberDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonenumberDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
