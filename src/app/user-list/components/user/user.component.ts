import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserListService } from '../../services/user-list.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  form!: FormGroup;
  dataSource: any = [];
  inputList: string[] = [
    'suite'
  ]

  constructor(
    private fb: FormBuilder,
    private userListService: UserListService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.userListService.getUsers().subscribe((users: any) => {
      this.dataSource = users;
      console.log('UsersListService -> User:', users);
    });
  }

  initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      name: ['', Validators.required],
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid);
  }
}
