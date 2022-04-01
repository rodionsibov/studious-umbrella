import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserListService } from '../../services/user-list.service';
import { User } from '../../types/user';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  form!: FormGroup;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private userListService: UserListService,
    @Inject(MAT_DIALOG_DATA) data: { user: User }
  ) {
    this.user = data.user;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      id: [this.user.id, Validators.required],
      address: this.fb.group({
        suite: [this.user.address.suite, Validators.required],
        city: [this.user.address.city, Validators.required],
        street: [this.user.address.street, Validators.required],
        zipcode: [this.user.address.zipcode, Validators.required],
      }),
      company: this.fb.group({
        name: [this.user.company.name, Validators.required],
        catchPhrase: [this.user.company.catchPhrase, Validators.required],
      }),
      email: [this.user.email, Validators.required],
      name: [this.user.name, Validators.required],
      phone: [this.user.phone, Validators.required],
      username: [this.user.username, Validators.required],
      website: [this.user.website, Validators.required],
    });
  }

  onSubmit(): void {
    console.log('Submit', this.form.value, this.form.valid);
  }
}
