import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private titleService = inject(TitleService)

  public title = computed(() => this.titleService.title())
  public UserData = {}
}
