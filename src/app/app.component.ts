
// TODO Refont all code and max optimization and lisibility

import { Component, ContentChild, ElementRef, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectComponent} from "./components/project/project.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { activeLinkNavbarService } from './infrastructure/services/activeLinkNavbarService';


import {TranslateService, TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslatePipe],
  imports: [CommonModule, RouterOutlet, HeaderComponent, AboutComponent, ProjectComponent, FooterComponent, ContactComponent]
})

export class AppComponent {

  active: number = this.activeService.getActive();

  
  constructor (
    private activeService: activeLinkNavbarService,
    public translate: TranslateService,
    appHtmlElement: ElementRef
    
  ) {
    activeService.setApp(appHtmlElement);
    translate.addLangs(["fr", "en", "es"])
    
    translate.setDefaultLang('en')
    translate.use(!translate.langs.includes(window.navigator.language.split('-')[0]) ? 'en' : window.navigator.language.split('-')[0])
    }
  

  ngOnInit() {
    this.activeService.init();
  }


  @HostListener('window:scroll', ['$event'])
  handleKeyDown(event: Event) {
    this.activeService.checkTopToActiveIndex(window.scrollY)
  }  

  
}

