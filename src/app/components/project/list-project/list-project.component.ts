import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DOING, en, fr } from '../../../infrastructure/models/mock-projects';
import { Project } from '../../../infrastructure/models/projects';
import { tehnoBackgroundPipe } from '../../../infrastructure/technoBackgroundPipe';
import { TranslateModule, TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-list-project',
  standalone: true,
  imports: [CommonModule, tehnoBackgroundPipe, TranslateModule],
  templateUrl: './list-project.component.html',
  providers: [TranslatePipe],
  styleUrls: ['./list-project.component.css', './list-project-responsive.css']
})
export class ListProjectComponent implements OnInit {
  INITIAL_NUMBER = 3;
  isMoreAction = false;

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(() => {
      switch (this.translate.currentLang) {
        case 'fr':
          this.PROJECTS = fr
          break;
          case 'en':
            this.PROJECTS = en
            break;
            default: break;
          }
          if (this.PROJECTS == null) return;
          this.LESS_PROJECTS = this.PROJECTS.slice(0, this.INITIAL_NUMBER)
          if (this.isMoreAction) {
            this.CURRENT_PROJECT = this.PROJECTS;
          } else {
            this.CURRENT_PROJECT = this.LESS_PROJECTS;
          }
        });
  }

  PROJECTS: Project[] | undefined;
  LESS_PROJECTS: Project[] | undefined
  CURRENT_PROJECT: Project[] | undefined;
  DOING: Project = DOING;

  
  toggleDisplayProject(event: MouseEvent): void {
    this.CURRENT_PROJECT = (this.CURRENT_PROJECT == this.LESS_PROJECTS) ? this.PROJECTS : this.LESS_PROJECTS
    this.isMoreAction = (this.CURRENT_PROJECT == this.PROJECTS) 
  if (this.CURRENT_PROJECT == this.PROJECTS) event.preventDefault();
  }
}