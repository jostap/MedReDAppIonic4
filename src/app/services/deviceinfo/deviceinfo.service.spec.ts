import { TestBed, inject } from '@angular/core/testing';

import { DeviceinfoService } from './deviceinfo.service';

describe('DeviceinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceinfoService]
    });
  });

  it('should be created', inject([DeviceinfoService], (service: DeviceinfoService) => {
    expect(service).toBeTruthy();
  }));
});
