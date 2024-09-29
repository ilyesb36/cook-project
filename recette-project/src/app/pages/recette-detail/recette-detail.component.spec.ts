import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteDetailComponent } from './recette-detail.component';

describe('RecetteDetailComponent', () => {
  let component: RecetteDetailComponent;
  let fixture: ComponentFixture<RecetteDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetteDetailComponent]
    });
    fixture = TestBed.createComponent(RecetteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
