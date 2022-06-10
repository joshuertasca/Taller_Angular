import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-narvar',
  templateUrl: './narvar.component.html',
  styleUrls: ['./narvar.component.css']
})
export class NarvarComponent implements OnInit {

@Input() titulo_nav:any;

  constructor() { }

  ngOnInit(): void {
  }

}
