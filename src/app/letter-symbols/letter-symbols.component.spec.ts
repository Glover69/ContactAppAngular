import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSymbolsComponent } from './letter-symbols.component';

describe('LetterSymbolsComponent', () => {
  let component: LetterSymbolsComponent;
  let fixture: ComponentFixture<LetterSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterSymbolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
