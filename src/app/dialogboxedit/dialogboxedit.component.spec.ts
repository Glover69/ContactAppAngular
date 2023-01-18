import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogboxeditComponent } from './dialogboxedit.component';

describe('DialogboxeditComponent', () => {
  let component: DialogboxeditComponent;
  let fixture: ComponentFixture<DialogboxeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogboxeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogboxeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
