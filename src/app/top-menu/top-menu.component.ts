import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetLanguageChoose } from '../shared/store/actions/language.actions';
import { LanguageState } from '../shared/store/state/language.state';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef,
              private readonly store: Store) { }

  Language: string;

  ngOnInit() {
    this.Language = this.store.selectSnapshot(LanguageState.LanguageChoose);

    this.Activebtn(this.Language, 0);

  }

  Activebtn(value, ex) {
     // tslint:disable-next-line: max-line-length
    const btn = this.viewContainerRef.element.nativeElement.children[0].children[2].children[1];
    if (value === 'en') {

      btn.children[1].classList.add('active');
      btn.children[0].classList.remove('active');

    } else if (value === 'fr') {

      btn.children[0].classList.add('active');
      btn.children[1].classList.remove('active');
    }

    if (ex === 1) {
      this.store.dispatch(new GetLanguageChoose(value));
    }
  }

}
