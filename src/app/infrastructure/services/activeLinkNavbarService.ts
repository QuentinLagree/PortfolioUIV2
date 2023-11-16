import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class activeLinkNavbarService {
  
  constructor () {}

  private app: ElementRef | undefined;
  private activeSection: number = 0;
  private activeSectionToOffsetTop: Map<number, HTMLElement> = new Map()
  private allSectionsTop: number[] = [];

  setActiveSection(indexOfActiveSection: number): void {
    this.activeSection = indexOfActiveSection
  }

  protected addComponentToMap(component: HTMLElement): void {
    this.activeSectionToOffsetTop.set(component.offsetTop - 100, component)
  }

  getAllPossibleTop (): number[] {
    return this.allSectionsTop;
  }

  getActive (): number {
    return this.activeSection
  }

  setApp(app: ElementRef): void {
    this.app = app;
  }

  init(): void {
    if (!this.app) return;
    let arrayComponents: HTMLElement[] = Array.from(this.app.nativeElement.children)
    arrayComponents.map((component: HTMLElement) => {this.addComponentToMap(component)})
    this.allSectionsTop = Array.from(this.activeSectionToOffsetTop.keys()) 
  };

  checkTopToActiveIndex(top: number) {
    this.activeSectionToOffsetTop = new Map()
    this.init()
    if (!this.app) return;
    for (let i = 0; i < this.allSectionsTop.length; i++) {
      let indexActive = Array.from((this.app.nativeElement as HTMLElement).children).indexOf(this.activeSectionToOffsetTop.get(this.allSectionsTop[i]) as HTMLElement)
      if ((top > this.allSectionsTop[i] && top < this.allSectionsTop[i+1]) && this.getActive() != indexActive) {
        this.setActiveSection(indexActive)
        break;
      }
    }
    return;
  }
  
}
