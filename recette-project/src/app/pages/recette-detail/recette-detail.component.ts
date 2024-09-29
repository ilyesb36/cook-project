import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetteService } from '../../services/recette.service';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.scss']
})
export class RecetteDetailComponent implements OnInit {
  recette: any;

  constructor(private route: ActivatedRoute, private recetteService: RecetteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.recetteService.getRecetteById(id).subscribe((data) => {
      this.recette = data;
    });
  }
}