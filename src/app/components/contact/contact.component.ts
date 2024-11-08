import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      form_name: ['', Validators.required],
      to_name: ['Tor'],
      form_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {
    emailjs.init('En3z0RkjbTf2w6act');
  }

  async send() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      alert('กรุณากรอกข้อมูลในฟิลด์ที่จำเป็นให้ถูกต้อง.');
      return;
    }

    try {
      let response = await emailjs.send('service_lqq6ral', 'template_wcr6q0b', {
        to_name: this.form.value.to_name,
        from_name: this.form.value.form_name,
        from_email: this.form.value.form_email,
        message: this.form.value.message,
      });
      console.log('Email sent successfully:', response);
      alert('Message has been sent.');
      this.form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send the message. Please try again later.');
    }
  }
}
