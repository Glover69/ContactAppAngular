import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogboxaddcomponentComponent } from './dialogboxaddcomponent.component';

describe('DialogboxaddcomponentComponent', () => {
  let component: DialogboxaddcomponentComponent;
  let fixture: ComponentFixture<DialogboxaddcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogboxaddcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogboxaddcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
