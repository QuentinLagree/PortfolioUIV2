import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProjectComponent } from './list-project/list-project.component';
import { TranslatePipe, TranslateModule, TranslateService} from "@ngx-translate/core"
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ListProjectComponent, TranslateModule],
  providers: [TranslatePipe],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor (
    public translate: TranslateService,
    private route: Router) {}
}


