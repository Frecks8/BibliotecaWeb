import { TestBed } from '@angular/core/testing';

import { EnlaceComponentesService } from './enlace-componentes.service';

describe('EnlaceComponentesService', () => {
  let service: EnlaceComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnlaceComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
