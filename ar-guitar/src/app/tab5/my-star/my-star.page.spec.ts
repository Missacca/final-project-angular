import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyStarPage } from './my-star.page';

describe('MyStarPage', () => {
  let component: MyStarPage;
  let fixture: ComponentFixture<MyStarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
