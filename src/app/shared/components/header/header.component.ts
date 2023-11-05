import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private router = inject(Router)
  private activeRoute = inject(ActivatedRoute)

  public title: string = 'Inicio'
  public UserData = {}

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.firstChild?.routeConfig?.title)
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd ) {
        const fullTitle = this.activeRoute.snapshot.firstChild?.routeConfig?.title as string || 'Inicio'
        const unwantedText = '| Brisas del Litoral'
        this.title = fullTitle.replace(unwantedText, '')
      }
    })
  }
}
