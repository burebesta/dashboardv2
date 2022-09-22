import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetElementComponent } from './target-element.component';

describe('TargetElementComponent', () => {
  let component: TargetElementComponent;
  let fixture: ComponentFixture<TargetElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
