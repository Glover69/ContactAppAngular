import { TestBed } from '@angular/core/testing';

import { EditdialogtextService } from './editdialogtext.service';

describe('EditdialogtextService', () => {
  let service: EditdialogtextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditdialogtextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
