import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyFavoritePage } from './my-favorite.page';

describe('MyFavoritePage', () => {
  let component: MyFavoritePage;
  let fixture: ComponentFixture<MyFavoritePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
