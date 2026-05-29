import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Tndr1racingPage } from './tndr1racing.page';

describe('Tndr1racingPage', () => {
  let component: Tndr1racingPage;
  let fixture: ComponentFixture<Tndr1racingPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(Tndr1racingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
