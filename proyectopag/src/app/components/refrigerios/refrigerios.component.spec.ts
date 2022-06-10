import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeriosComponent } from './refrigerios.component';

describe('RefrigeriosComponent', () => {
  let component: RefrigeriosComponent;
  let fixture: ComponentFixture<RefrigeriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrigeriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigeriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
