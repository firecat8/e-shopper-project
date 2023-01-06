import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  likes: number = 0;
  productsCount: number = 0;


  constructor() { }

  ngOnInit() {
  }

}
