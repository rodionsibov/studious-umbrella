import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRequest } from '../../types/user-request';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { updateUser } from '../../store/actions';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  form!: FormGroup;
  user!: UserRequest;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) data: { user: UserRequest }
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
    this.store.dispatch(updateUser({ user: this.form.value }));
  }
}
