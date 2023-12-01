import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private titleService = inject(Title)
  private router = inject(Router)
  private activeRoute = inject(ActivatedRoute)

  public title: string = this.titleService.getTitle().replace('| Brisas del Litoral', '')
  public UserData = {}

  ngOnInit(): void {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd ) {
        const fullTitle = this.activeRoute.snapshot.firstChild?.routeConfig?.title as string || this.titleService.getTitle()
        const unwantedText = '| Brisas del Litoral'
        this.title = fullTitle.replace(unwantedText, '')
      }
    })
  }
}
