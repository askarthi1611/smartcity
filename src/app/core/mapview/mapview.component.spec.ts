import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapviewComponent } from './mapview.component';

describe('MapviewComponent', () => {
  let component: MapviewComponent;
  let fixture: ComponentFixture<MapviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapviewComponent]
    });
    fixture = TestBed.createComponent(MapviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
