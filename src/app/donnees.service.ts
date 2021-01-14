import { Injectable } from '@angular/core';
import * as liste from '../assets/data/bd.json';
import * as table from '../assets/data/commandes.json';

@Injectable({
  providedIn: 'root'
})

export class DonneesService {
  dataBd: any = (liste as any).default;
  dataCommandes: any = (table as any).default.articles;
  constructor() { }
}
