import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  providers: [TranslatePipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', './about-responsive.component.css']
})
export class AboutComponent implements AfterViewInit{


  constructor(
    private translate: TranslateService
  ) {}


  @ViewChild('paragraphs') paragraphs: ElementRef | undefined;

  ngAfterViewInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.translateParagraphsInAboutSection();
    });
  }

  translateParagraphsInAboutSection(): void {
    if (!this.paragraphs) return;
    let paragraphCaptionList: Element[] = Array.from((this.paragraphs.nativeElement as HTMLTableCaptionElement).children);
    for (let i = 0; i < paragraphCaptionList.length; i++) {
      this.translate.get(`about.description.${i + 1}`).subscribe((paragraphText: string) => {
        let index = 0;
        while (paragraphText.includes('{') || paragraphText.includes('}')) {
          let start = paragraphText.indexOf("{");
          let end = paragraphText.indexOf("}");
          let part = paragraphText.substring(start, end + 1);
          let text = part.split('-')[0].replace('{', '');
          let link = part.split('-')[1].replace('}', '')
          paragraphText = paragraphText.replace(part, `<a style="color: var(--secondary); 
          text-decoration: none;"alt="${text}" target="_blank" href="${link}">${text}</a></style>`)
          index++;

          index = (index <= paragraphText.length) ? 0 : index
        }


        paragraphCaptionList[i].innerHTML = paragraphText

      })
    }


  }

}
