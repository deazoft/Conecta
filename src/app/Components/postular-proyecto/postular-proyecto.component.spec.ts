import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostularProyectoComponent } from './postular-proyecto.component';

describe('PostularProyectoComponent', () => {
  let component: PostularProyectoComponent;
  let fixture: ComponentFixture<PostularProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostularProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostularProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
