import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "langTransform",
    standalone: true
})

export class LangShortcutPipe implements PipeTransform {
    transform(type: string): string {
    
      let lang: string;
    
      switch (type) {
        case 'fr':
          lang = 'Français';
          break;
        case 'en':
          lang = 'English';
          break;
          case 'es':
            lang = "Español";
            break;
          case 'ja':
            lang = "Japan";
            break;
          case 'ko':
            lang = "Korean"
            break;
        default:
            lang = ""
          break;
      }
    
      return lang;
    
    }
  
}