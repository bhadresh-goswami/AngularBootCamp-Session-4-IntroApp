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
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  getInput(text: string) {
    this.text = text;
  }
  translateText(language: string) {
    this.translateService.use(language);

    this.translateService.get(this.text).subscribe((result: string) => {
      this.translatedText = result;
    });
  }
}
