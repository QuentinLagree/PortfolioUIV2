import { ElementRef, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ButtonStateService } from './buttonStateOfContactFormService';

@Injectable({
  providedIn: 'root'
})


export class MailerService {

  constructor(private http: HttpClient,
    private buttonState: ButtonStateService,
    private route: Router
  ) { }

  sendMail(user: { surname: string, firstname: string, email: string, subject: string, message: string }): Promise<boolean> {
    console.log(user)

    const headers = new HttpHeaders()
      .set('Authorization', 'sendmailAPI')
      .set('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      this.http.post(`http://${window.location.hostname}:3000/api/sendmail`, JSON.stringify(user), {
        headers: headers
      })
        .subscribe(respond => {
          this.buttonState.setState(this.buttonState.STATES.success)
          resolve(true)
        });

      this.buttonState.setState(this.buttonState.STATES.loading)
    });


  }

}