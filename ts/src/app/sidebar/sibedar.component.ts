import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  title = 'SLACA 2019';
  sidebarStyling =
    'md:p-2 md:text-sm md:font-semibold text-menuSidebar font-sand';

  menus = [
    { name: 'Apresentação', value: 'apresentacao' },
    { name: 'Comitês', value: 'comites' },
    { name: 'Autores', value: 'autores' },
    { name: 'Eixos Temáticos', value: 'eixos' },
    { name: 'Trabalhos', value: 'trabalhos' },
    { name: 'Contato', value: 'contato' },
  ];

  constructor() {}
}
