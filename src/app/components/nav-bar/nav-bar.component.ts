import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { activeLinkNavbarService } from '../../infrastructure/services/activeLinkNavbarService';

import { TranslatePipe, TranslateModule, TranslateService } from '@ngx-translate/core';
import {LangShortcutPipe} from '../../infrastructure/langShortcut.pipe'
import { Router } from '@angular/router';
import { width_mobile } from '../../infrastructure/data';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NgClass, NgIf, TranslateModule, LangShortcutPipe],
  providers: [TranslatePipe],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css', './nav-bar-responsive.component.css'],
  inputs: ['displayTitle', "activeLink"]
})
export class NavBarComponent implements OnInit{


  constructor (
    public activeService: activeLinkNavbarService,
    public translate: TranslateService,
    public router: Router
    ) {}
  ngOnInit(): void {
    this.fixed = (window.innerWidth < width_mobile);
  }
  
  fixed: boolean | undefined;
  displayTitle: boolean | undefined = false;

  @ViewChild('navBar') navBar: ElementRef | undefined;
  @ViewChild('langMenu') menuLangs: ElementRef | undefined;

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    if (!this.navBar) return;
    this.fixed = window.scrollY > (this.navBar.nativeElement).offsetTop || window.innerWidth < width_mobile
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    let targetIsMenuLang: boolean = event.target != this.menuLangs?.nativeElement
    let targetIsAChildOfMenuLang: boolean = this.menuLangs?.nativeElement.contains(event.target)
    let menuIsOpen: boolean = this.menuLangs?.nativeElement.classList.contains('active')
    
    if ((!targetIsMenuLang || !targetIsAChildOfMenuLang) && menuIsOpen) {
      this.menuLangs?.nativeElement.classList.remove('active')
    }
  }
  
  toggleMenu () {
    (this.menuLangs?.nativeElement as HTMLDivElement).classList.toggle('active')
  }

  validateChoice(lang: string) {
    (this.menuLangs?.nativeElement as HTMLDivElement).classList.remove('active')
    if (!this.translate.langs.includes(lang)) {
      throw new Error(`The language : '${lang}', is not supported ! Try click in language options and select your language...`)
    }
      this.translate.use(lang);
  }
  
}
