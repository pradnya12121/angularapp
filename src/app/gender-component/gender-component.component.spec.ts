import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderComponentComponent } from './gender-component.component';

describe('GenderComponentComponent', () => {
  let component: GenderComponentComponent;
  let fixture: ComponentFixture<GenderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
