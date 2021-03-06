import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ContactFormModel } from 'src/app/models/contact-form.model';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contactFormModel: ContactFormModel = new ContactFormModel();

  msgAlert: string = '';

  constructor(  private fireService: FirestoreService ) { }
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
      this.showAlert('Complete all the fields!');
      return 
    }else{
      this.fireService.createDataContactForm(this.contactFormModel).then( (resp)=>{
        console.log(resp);
        this.contactFormModel.name = '';  
        this.contactFormModel.email = '';
        this.contactFormModel.phone = null;
        this.contactFormModel.message = '';

        this.showAlert('We got your message!');

      }).catch( (error) =>{
        console.error('error:', error);
        this.showAlert('error');
      });
    }

  }

  showAlert(msgParam: string) {
    this.msgAlert = msgParam;
    let element = document.getElementById("snackbar");
    element.className = "show";
    setTimeout( ()=>{
      element.className = element.className.replace("show", "")
    }, 3000);
  }

}
