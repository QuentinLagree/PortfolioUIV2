import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "tehnoBackgroundColor",
    standalone: true
})

export class tehnoBackgroundPipe implements PipeTransform {
    transform(type: string): string {
    
        type = type.toLowerCase();
        
      let color: string;
    
      switch (type) {
        case 'html':
          color = 'rgba(251, 172, 54, .4)';
          break;
        case 'css':
          color = 'rgba(54, 202, 251, .4)';
          break;
        case 'javascript':
          color = 'rgba(251, 218, 54, .4)';
          break;
        case 'java':
          color = 'rgba(251, 97, 54, .4)';
          break;
        case 'nodejs':
          color = 'rgba(54, 251, 110, .4)';
          break;
        case 'sql':
          color = 'rgba(54, 231, 251, .4)';
          break;
        case 'angular': 
          color = "rgba(252, 99, 201, .4)"
          break
        case 'typescript':
          color = "rgba(124, 99, 252, .4)"
          break;
        default:
          color = '#e9e8e8';
          break;
      }
    
      return color;
    
    }
  
}