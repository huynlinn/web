import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsComponent } from './tag.component';

describe('TagComponent', () => {
  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [component]
    });
    fixture = TestBed.createComponent(component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
