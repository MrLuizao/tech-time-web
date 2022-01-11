import { Injectable } from '@angular/core';
import { ContactFormModel } from '../models/contact-form.model';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private firestore: AngularFirestore ) { }

  createDataContactForm( dataForm: ContactFormModel){   
    const CONTACT_FORM = {...dataForm};  
    return this.firestore.collection('contact-form').add( CONTACT_FORM )
  }
}
