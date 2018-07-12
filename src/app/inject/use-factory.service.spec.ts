import { TestBed, inject } from '@angular/core/testing';

import { UseFactoryService } from './use-factory.service';

describe('UseFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseFactoryService]
    });
  });

  it('should be created', inject([UseFactoryService], (service: UseFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
