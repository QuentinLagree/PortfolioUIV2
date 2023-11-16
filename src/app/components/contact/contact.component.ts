import { Component } from '@angular/core';
import { TranslateModule, TranslatePipe } from "@ngx-translate/core";
import { FormsModule, NgForm } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MailerService } from '../../infrastructure/services/mailerService';
import { ButtonStateService } from '../../infrastructure/services/buttonStateOfContactFormService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [TranslateModule, FormsModule, NgClass],
  providers: [TranslatePipe],
  styleUrls: ['./contact.component.css', './contact-responsive.component.css']
})
export class ContactComponent {

  surname: string = "";
  firstname: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";



  constructor(
    private mailer: MailerService,
    public buttonState: ButtonStateService
  ) { }


  sendMessage(form: NgForm) {

    if (!form.valid) {
      throw new Error('Error: The form is not valid...')
    };


    const mail = this.mailer.sendMail({
      surname: this.surname,
      firstname: this.firstname,
      email: this.email,
      subject: this.subject,
      message: this.message,
    });

    mail.then((isSend: boolean) => {
      if (isSend) {
        form.onReset();
        setTimeout(() => this.buttonState.setState(this.buttonState.STATES.default), 2000)
      }
    })

  }
}
