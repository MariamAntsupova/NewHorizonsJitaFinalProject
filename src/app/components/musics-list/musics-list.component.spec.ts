import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicsListComponent } from './musics-list.component';

describe('MusicsListComponent', () => {
  let component: MusicsListComponent;
  let fixture: ComponentFixture<MusicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
