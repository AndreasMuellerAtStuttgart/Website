import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCollectionAndPrivacyComponent } from './data-collection-and-privacy.component';

describe('DataCollectionAndPrivacyComponent', () => {
  let component: DataCollectionAndPrivacyComponent;
  let fixture: ComponentFixture<DataCollectionAndPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCollectionAndPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCollectionAndPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
