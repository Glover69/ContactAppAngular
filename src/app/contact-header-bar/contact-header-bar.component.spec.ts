import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeaderBarComponent } from './contact-header-bar.component';

describe('ContactHeaderBarComponent', () => {
  let component: ContactHeaderBarComponent;
  let fixture: ComponentFixture<ContactHeaderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactHeaderBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
