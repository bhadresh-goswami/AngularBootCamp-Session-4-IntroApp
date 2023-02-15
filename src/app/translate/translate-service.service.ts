import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateServiceService {
  constructor() {}
  testMethod(): string {
    return 'this.translate';
  }
}
