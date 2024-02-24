import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  };

  onSubmit() {
    console.log('Formulaire soumis :', this.formData);
  }
}
