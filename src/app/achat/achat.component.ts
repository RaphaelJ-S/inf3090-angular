import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})

export class AchatComponent implements OnInit {
	
	articles: any = this.dataService.dataBd;
	panier: any[] = [];
	total: number = 0;
	afficherTab: boolean = false;
	montre: boolean = false;
	form = new FormGroup({
		article: new FormControl(''),
	});
  
  constructor(private dataService: DonneesService) { }
  
  ngOnInit(): void {
  }
  
  ajoutArticle(): void {
    this.montre = false
	let arct: String = this.form.get('article').value;
	for(let x of this.articles) {
		if(x.id === arct) {
			if(!(arct === undefined || arct === "")) {
				this.panier.push(x);
				this.afficherTab = true;
			}
			this.total += x.prix;
		}
	}
	
  }

  viderPanier(): void {
	this.montre = false;
	this.panier = [];
	this.total = 0;
	this.afficherTab = false;
  }
  
  confirme(): void {
	this.montre = true;
  }
}
