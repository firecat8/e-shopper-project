import { Component, OnInit } from '@angular/core';


class CategoryInfo {
  name: string;
  count: number;
  imagePath: string;
  constructor(name: string, imagePath: string, count: number) {
    this.name = name;
    this.imagePath = imagePath;
    this.count = count;
  }
}

class ItemInfo {
  name: string;
  price: number;
  imagePath: string;
  constructor(name: string, imagePath: string, price: number) {
    this.name = name;
    this.imagePath = imagePath;
    this.price = price;
  }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  categoriesInfo: CategoryInfo[] = [
    new CategoryInfo("Men's dresses", "man.jpg", 15),
    new CategoryInfo("Women's dresses", "woman.jpg", 15),
    new CategoryInfo("Baby's dresses", "child.jpg", 15),
    new CategoryInfo("Accerssories", "camera.jpg", 15),
    new CategoryInfo("Bags", "bag.jpg", 15),
    new CategoryInfo("Shoes", "shoes.jpg", 15),
  ];

  itemsInfo: ItemInfo[] = [
    new ItemInfo("White dress", "white-dress.jpg", 25),
    new ItemInfo("Boy jeans jacket", "boy-jeans-jacket.jpg", 35),
    new ItemInfo("Black leather jacket", "man-leather-jacket.jpg", 85),
    new ItemInfo("Black dress", "black-dress.jpg", 25),
    new ItemInfo("Girl T-shirt", "girl-t-shirt.jpg", 15),
    new ItemInfo("Black suit", "black-suit.jpg", 115),
    new ItemInfo("Black coat", "woman-black-coat.jpg", 75),
    new ItemInfo("Boy T-shirt", "boy-t-shirt.jpg", 15)
  ];

  constructor() { }

  ngOnInit() {
  }

}
