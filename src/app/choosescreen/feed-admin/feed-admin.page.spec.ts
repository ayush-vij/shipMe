import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedAdminPage } from './feed-admin.page';

describe('FeedAdminPage', () => {
  let component: FeedAdminPage;
  let fixture: ComponentFixture<FeedAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
