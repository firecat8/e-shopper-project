import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/domain/Category';

@Component({
  selector: 'categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.sass']
})
export class CategoriesMenuComponent implements OnInit {

  isOpen: boolean = true;

  @Input() categories: Category[] = [
    new Category("Dresses",
      [
        new Category("Men's Dresses", []),
        new Category("Women's Dresses", []),
        new Category("Baby's Dresses", [])
      ]),
    new Category("Shirts", []),
    new Category("Jeans", []),
    new Category("Swimwear", []),
    new Category("Sleepwear", []),
    new Category("Sportwear", []),
    new Category("Jumpsuits", []),
    new Category("Blazers", []),
    new Category("Jackets", []),
    new Category("Shoes", [])
  ]

  constructor() { }

  ngOnInit() {
  }
  
  public onClick() {
    this.isOpen = !this.isOpen;
  }
}
