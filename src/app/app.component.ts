import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  template: `
    <app-header/>
    <app-home/>
    <app-footer/>
  `
})
export class AppComponent {
  title = 'espetinho_eni';
}
