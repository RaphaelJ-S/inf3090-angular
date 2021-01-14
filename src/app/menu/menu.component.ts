import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  active(id:string):void {
	this.reinitialise();
	let inactif = document.querySelector('#'+id);
	inactif.setAttribute('class', 'dropdown-item active');
  }
  reinitialise():void {
	if(document.querySelectorAll('.active')) {
	  let actif = document.querySelectorAll('.active');
	  actif.forEach(element => { element.setAttribute('class', 'dropdown-item');});
    }
  }
}
