import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTests } from './ui-tests';

describe('UiTests', () => {
  let component: UiTests;
  let fixture: ComponentFixture<UiTests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiTests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
