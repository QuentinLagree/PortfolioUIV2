import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { TranslatePipe, TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavBarComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header-responsive.component.css'],
  providers: [TranslatePipe]
})

export class HeaderComponent{

  fixed: boolean | undefined = false;
  displayTitle: boolean | undefined = false;

  status: string[] = []
  index: number = 0;
  
  constructor (
    public translateService: TranslateService) {}
    
    @ViewChild('label_rotate') labelRotate: ElementRef | undefined;
    @ViewChild('titleWebsite') title: ElementRef | undefined;
    @ViewChild('typingEffect') typing: ElementRef | undefined;

    
    
    async ngAfterViewInit(): Promise<void> {
      this.translateService.get('typing.status').subscribe(
        status => {
            this.status = status
            this.carousel()
        }
      )
      this.translateService.onLangChange.subscribe(() => {
        this.displayRotatedText()
      })

    }
  @HostListener('window:scroll', ['$event'])
  handleKeyDown() {

    if (!this.title) return;
    this.displayTitle = window.scrollY > this.title.nativeElement.offsetTop
  }
  
  displayRotatedText () {
    if (!this.labelRotate) {
      throw new Error("The text isn't found in html file from HeaderComponentComponent")
    }

    this.translateService.get("header.call-to-action").subscribe((callActionText: string) => {
      if (!this.labelRotate) return;
      this.labelRotate.nativeElement.children[0].innerHTML = callActionText.split("").map((char, i) => 
      `<span class="header__call-to-scroll--label" style="
      transform:rotate(${i * 9}deg);
      position: absolute;
      left: 50%;
      font-size: 1em;
      transform-origin:0 100px;"
      >${char}</span>`
    ).join(""); 
    })
  }
  

  async typeSentence(sentence: string, delay: number = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await this.waitForMs(delay);
      (this.typing?.nativeElement as HTMLParagraphElement).innerText = `${(this.typing?.nativeElement as HTMLParagraphElement).innerHTML}${letters[i]}`;
      i++
    }
    return;
  }
  async deleteSentence() {
    const sentence = (this.typing?.nativeElement as HTMLParagraphElement).innerHTML;
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await this.waitForMs(100);
      letters.pop();
      (this.typing?.nativeElement as HTMLParagraphElement).innerHTML = (letters.join(""));
    }
  }

  async carousel() {
    let language: string = this.translateService.currentLang;
    var i = 0;
    while(true) {
        if (language != this.translateService.currentLang) {
            this.translateService.get('typing.status').subscribe(
                status => {
                    this.status = status
                    language = this.translateService.currentLang
                    
                }
              )
        }
      await this.typeSentence(this.status[i]);
      await this.waitForMs(1500);
      await this.deleteSentence();
      await this.waitForMs(500);
      i++
      if(i >= this.status.length) i = 0;
    }
}
  
  private waitForMs(ms: number): Promise<Function> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  

}

