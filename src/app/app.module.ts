import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ImageComponent } from './components/image/image.component';
import { LinksComponent } from './components/links/links.component';
import { NameComponent } from './components/name/name.component';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    LinksComponent,
    TitleComponent,
    NameComponent,
    CalculatorComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
