import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  about: boolean;
  portfolio: boolean;
  resume: boolean;
  code: boolean;

  constructor() {

    this.about = true

    this.portfolio = false
    this.resume = false
    this.code = false  

  }

  toggleIcon(iconName: string) {

    switch (iconName) {
      case 'about':
        this.about = true

        this.portfolio = false
        this.code = false  
        this.resume = false
        break;
      case 'portfolio':
        this.portfolio = true

        this.about = false
        this.code = false  
        this.resume = false
        break
      case 'code':
        this.code = true

        this.about = false
        this.portfolio = false
        this.resume = false
        break
      case 'resume':
        this.resume = true

        this.about = false
        this.portfolio = false
        this.code = false  
        break

      default:
        break;
    }
  }

}
