import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesIndividualComponent } from './likes-individual.component';

describe('LikesIndividualComponent', () => {
  let component: LikesIndividualComponent;
  let fixture: ComponentFixture<LikesIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikesIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
