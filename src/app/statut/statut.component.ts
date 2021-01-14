import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../donnees.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.css']
})

export class StatutComponent implements OnInit {
  affichage: any[] = [];
  commandeAff: any = 0;
  pos= new FormControl('');
  afficherCommande: boolean = false;
  afficherMsgErr: boolean = false;
  
  constructor(private dataService: DonneesService) { }
  ngOnInit(): void {
  }

  chercher() {
	let artTrouver: any[] = this.filtrer();
	if( artTrouver.length != 0) {
	  this.affichage = artTrouver;
	  this.afficherCommande = true;
	  this.afficherMsgErr = false;
	}else {
	  this.afficherCommande = false;
	  this.afficherMsgErr = true;
	}
  }
  filtrer(): any[] {
	let id: string[] = [];
	let articles: any[] = [];
	
	this.dataService.dataCommandes.forEach(x => {if (x.numero == this.pos.value) {
		id.push(x.id);
		this.commandeAff = x;
	};});
	
	if(id.length != 0) {
	  id.forEach(y => {
		this.dataService.dataBd.forEach(z => {
			if(z.id == y) {
				articles.push(z);
			};
		});
	  });
	}
	
	return articles;
  }
}
