import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRecetteComponent } from './ajouter-recette.component';

describe('AjouterRecetteComponent', () => {
  let component: AjouterRecetteComponent;
  let fixture: ComponentFixture<AjouterRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterRecetteComponent]
    });
    fixture = TestBed.createComponent(AjouterRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
