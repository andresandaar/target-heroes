import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('buscarTexto')
  buscarTexto!: ElementRef;

  constructor(private router: Router) {}
  ngOnInit(): void {}
  buscarHeroe(termino: string) {
    this.router.navigate(['/buscar', termino]);
  }
  borrarBusqueda() {
this.buscarTexto.nativeElement.value='';
this.buscarHeroe('');
  }
}
