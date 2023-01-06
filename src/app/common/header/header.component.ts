import { Component, OnInit } from '@angular/core';

class Category {
  name: string;
  subcategories: Category[];
  constructor(name: string, subcategories: Category[]) {
    this.name = name;
    this.subcategories = subcategories;
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  likes: number = 0;
  productsCount: number = 0;

  categories: Category[] = [
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

}
