import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminProductComponent } from './add-admin-product.component';

describe('AddAdminProductComponent', () => {
  let component: AddAdminProductComponent;
  let fixture: ComponentFixture<AddAdminProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
