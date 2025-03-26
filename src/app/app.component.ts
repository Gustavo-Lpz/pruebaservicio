import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { FooterComponent } from "./pages/main/component/footer/footer.component";
import { HeaderComponent } from "./pages/main/component/header/header.component";

@Component({
  selector: 'app-root',
  imports: [MainComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebaservicio';
}
