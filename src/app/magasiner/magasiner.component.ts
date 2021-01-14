import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../donnees.service';
import * as liste from '../../assets/data/bd.json';

@Component({
  selector: 'app-magasiner',
  templateUrl: './magasiner.component.html',
  styleUrls: ['./magasiner.component.css']
})
export class MagasinerComponent implements OnInit {
  bd: any[] = this.dataService.dataBd;
  constructor(private dataService: DonneesService) { }

  ngOnInit(): void {
  }

}
