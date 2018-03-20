import { TestBed, inject } from '@angular/core/testing';

import { RandomuserService } from './randomuser.service';

describe('RandomuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomuserService]
    });
  });

  it('should be created', inject([RandomuserService], (service: RandomuserService) => {
    expect(service).toBeTruthy();
  }));
});
