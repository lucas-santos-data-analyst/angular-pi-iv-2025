import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTeste } from './card-teste';

describe('CardTeste', () => {
  let component: CardTeste;
  let fixture: ComponentFixture<CardTeste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTeste]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTeste);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
