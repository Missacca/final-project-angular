import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContractUsPage } from './contract-us.page';

describe('ContractUsPage', () => {
  let component: ContractUsPage;
  let fixture: ComponentFixture<ContractUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
