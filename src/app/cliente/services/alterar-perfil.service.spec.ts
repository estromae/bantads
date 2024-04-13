import { TestBed } from '@angular/core/testing';

import { AlterarPerfilService } from './alterar-perfil.service';

describe('AlterarPerfilService', () => {
  let service: AlterarPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlterarPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
