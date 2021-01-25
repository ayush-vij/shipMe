import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedOrdererPage } from './feed-orderer.page';

describe('FeedOrdererPage', () => {
  let component: FeedOrdererPage;
  let fixture: ComponentFixture<FeedOrdererPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedOrdererPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedOrdererPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
