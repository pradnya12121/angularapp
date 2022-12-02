import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDirectiveAssignComponent } from './new-directive-assign.component';

describe('NewDirectiveAssignComponent', () => {
  let component: NewDirectiveAssignComponent;
  let fixture: ComponentFixture<NewDirectiveAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDirectiveAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDirectiveAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
