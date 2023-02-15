import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text!: string;
  translatedText!: string;
  constructor(private translateService: TranslateService) {}

  getInput(text: string) {
    this.text = text;
  }
  translateText() {}
}
