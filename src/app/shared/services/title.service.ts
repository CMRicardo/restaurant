import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public title: BehaviorSubject<string>;

  constructor(private titleService: Title) {
    this.title = new BehaviorSubject<string>(titleService.getTitle());
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);

    this.title.next(newTitle);
  }
}
