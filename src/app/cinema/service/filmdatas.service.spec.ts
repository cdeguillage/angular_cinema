import { TestBed } from '@angular/core/testing';

import { FilmdatasService } from './filmdatas.service';

describe('FilmdatasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmdatasService = TestBed.get(FilmdatasService);
    expect(service).toBeTruthy();
  });
});
