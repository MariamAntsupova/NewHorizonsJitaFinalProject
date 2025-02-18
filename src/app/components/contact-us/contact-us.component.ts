import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule , CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  name: string = '';
  message: string = '';

  onSubmit() {
    if (this.name.trim() && this.message.trim()) {
      alert(`Thank you ${this.name} For Your Respond! ❤ Message Sent Successfully!`);
      this.clearForm();
    }
  }

  clearForm() {
    this.name = '';
    this.message = '';
  }
}
