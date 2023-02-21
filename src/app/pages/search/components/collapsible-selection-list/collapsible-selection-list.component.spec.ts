import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleSelectionListComponent } from './collapsible-selection-list.component';

describe('CollapsibleSelectionListComponent', () => {
  let component: CollapsibleSelectionListComponent;
  let fixture: ComponentFixture<CollapsibleSelectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsibleSelectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
