import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ContactFormModel } from 'src/app/models/contact-form.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contactFormModel: ContactFormModel = new ContactFormModel();

  constructor() { }
  // public sendEmail(e: Event) {
  //   e.preventDefault();
  //   emailjs.sendForm('smtp_server', 'template_8uQnFG6N_clone', e.target as HTMLFormElement, 'user_XWPdjpTv0DgrQb9FN3tWr')
  //     .then((result: EmailJSResponseStatus) => {
  //       alert("This form has been submitted.");
  //       location.href = '#';
  //       console.log(result.text);
  //     }, (error) => {
  //       alert("This form has been not submitted.");
  //       location.href = '#';
  //       console.log(error.text);
  //     });
  // }
  ngOnInit(): void {
  }

  sendContactForm(form: NgForm){
    
    if(form.invalid){ 
      console.log(this.contactFormModel);
      alert('INVALID FORM')
      return 
    }

    console.log(this.contactFormModel);

  }

}
