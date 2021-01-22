import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedCommuterPage } from './feed-commuter.page';

describe('FeedCommuterPage', () => {
  let component: FeedCommuterPage;
  let fixture: ComponentFixture<FeedCommuterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedCommuterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedCommuterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
