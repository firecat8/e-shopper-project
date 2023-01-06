import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from "./common/footer/footer.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoriesMenuComponent } from "./common/header/categories-menu/categories-menu.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        CategoriesMenuComponent,
        PageNotFoundComponent,
        ShoppingCartComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule
    ]
})
export class AppModule { }
