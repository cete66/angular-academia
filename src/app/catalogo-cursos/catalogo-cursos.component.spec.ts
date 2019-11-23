import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCursosComponent } from './catalogo-cursos.component';

describe('CatalogoCursosComponent', () => {
  let component: CatalogoCursosComponent;
  let fixture: ComponentFixture<CatalogoCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
