import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabmorepostPage } from './tabmorepost.page';

describe('TabmorepostPage', () => {
  let component: TabmorepostPage;
  let fixture: ComponentFixture<TabmorepostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabmorepostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabmorepostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
