import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  home: boolean;
  about: boolean;
  portfolio: boolean;
  resume: boolean;
  code: boolean;
  tndr1racing: boolean;
  youtube: boolean;
  slotPosition: string;
  
  constructor(private router: Router) {

    this.about = true

    this.portfolio = false
    this.resume = false
    this.code = false  
    this.slotPosition = 'top'


    console.log('qur pasa aqui ', this.router.url)

    let activeTab = this.router.url.split('/tabs/')[1]

    console.log('activeTab ', activeTab);
    
    this.toggleIcon(activeTab)

  }

  toggleActiveTab(path: string) {



  }

  toggleIcon(iconName: string) {

    console.log('ICON NA,E ', iconName)
    switch (iconName) {
      case 'home':
        this.home = true

        this.about = false

        this.portfolio = false
        this.code = false  
        this.resume = false

        this.tndr1racing = false
        this.youtube = false

        break;
      case 'about':
        this.about = true

        this.portfolio = false
        this.code = false  
        this.resume = false

        this.tndr1racing = false
        this.youtube = false

        break;
      case 'portfolio':
        this.portfolio = true

        this.about = false
        this.code = false  
        this.resume = false
        this.tndr1racing = false
        this.youtube = false
        break
      case 'code':
        this.code = true

        this.about = false
        this.portfolio = false
        this.resume = false
        this.tndr1racing = false
        this.youtube = false
        break
      case 'resume':
        this.resume = true

        this.about = false
        this.portfolio = false
        this.code = false  
        this.tndr1racing = false
        this.youtube = false
        break
     case 'tndr1racing':

        this.tndr1racing = true

        this.resume = false
        this.about = false
        this.portfolio = false
        this.code = false  
        this.youtube = false

        break

      case 'youtube':

        this.youtube = true

        this.resume = false
        this.about = false
        this.portfolio = false
        this.code = false  
        this.tndr1racing = false

        break

      default:
        break;
    }
  }

}
