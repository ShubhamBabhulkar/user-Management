import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-popup',
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.scss']
})
export class AddUserPopupComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    birthday: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    lang: new FormControl('', [
      Validators.required
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    about: new FormControl('', [
      Validators.required
    ])
  });
  languages: string[];
  constructor() { }

  ngOnInit() {
    this.languages = ['English', 'Mandarin Chinese', 'Spanish', 'Hindi', 'Standard Arabic',
     'Malay', 'Russian', 'Bengali', 'Portuguese', 'French'];

  }
  getrequired = (value) => {
    return this.userForm.get(value);
  }
}
