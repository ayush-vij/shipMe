import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostDetailsAdminPage } from './post-details-admin.page';

describe('PostDetailsAdminPage', () => {
  let component: PostDetailsAdminPage;
  let fixture: ComponentFixture<PostDetailsAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostDetailsAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
