import { Component, OnInit } from '@angular/core';
import { EnlaceComponentesService } from 'src/app/services/enlace-componentes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: { class: 'd-block' },
})

export class HomeComponent implements OnInit{
  
  public showSidebar : boolean = false;

  constructor(
    private enlaceComponentesService : EnlaceComponentesService
  ){}
  ngOnInit(): void {

  }

  toggleSidenav(){
    this.showSidebar = !this.showSidebar;
    this.enlaceComponentesService.enlace.emit({open: this.showSidebar});
  }

}
