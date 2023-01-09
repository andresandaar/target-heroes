import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
})
export class BuscarHeroeComponent implements OnInit {
  heroes: any[] = [];

  termino: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    private heroeService: HeroesService
  ) /* private router: Router */
  {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this.heroeService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }
  /*   verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);

  } */
}
