import { TestBed } from '@angular/core/testing';

import { ConndatabaseService } from './conndatabase.service';

describe('ConndatabaseService', () => {
  let service: ConndatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConndatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
