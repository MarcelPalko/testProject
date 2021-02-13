import { Component, OnInit } from '@angular/core';

export interface SidenavItem {
  title: string;
  icon: string;
}

export interface SidenavGroup {
  title: string;
  children: SidenavItem[];
}

@Component({
  selector: 'app-ui-sidenav',
  templateUrl: './ui-sidenav.component.html',
  styleUrls: ['./ui-sidenav.component.scss']
})
export class UiSidenavComponent implements OnInit {

  sidenavItems: SidenavGroup[] =
    [
      { title: 'Moduly',
        children: [
          { title: 'Položky', icon: 'fas fa-bookmark fa-fw' },
          { title: 'Příspěvky', icon: 'fas fa-edit fa-fw' },
          { title: 'Tabulky', icon: 'fas fa-table fa-fw' },
          { title: 'Grafy', icon: 'fas fa-chart-bar fa-fw' },
          { title: 'Mapy', icon: 'fas fa-map fa-fw' },
        ]
      },
      { title: 'Sekce',
        children: [
          { title: 'Pošta', icon: 'fas fa-envelope fa-fw' },
          { title: 'Kalendář', icon: 'fas fa-calendar-alt fa-fw' },
          { title: 'Stránky', icon: 'fas fa-file-alt fa-fw' },
          { title: 'Struktura', icon: 'fas fa-sitemap fa-fw' },
        ]
      }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
