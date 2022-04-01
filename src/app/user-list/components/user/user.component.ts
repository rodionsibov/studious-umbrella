import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserListService } from '../../services/user-list.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  form!: FormGroup;
  dataSource: User[] = [];
  columns = [
    // {
    //   columnDef: 'id',
    //   header: 'Id',
    //   cell: (element: User) => `${element.id}`,
    // },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: User) => `${element.name}`,
    },
    {
      columnDef: 'phone',
      header: 'Phone',
      cell: (element: User) => `${element.phone}`,
    },
    {
      columnDef: 'username',
      header: 'Username',
      cell: (element: User) => `${element.username}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: User) => `${element.email}`,
    },
    {
      columnDef: 'website',
      header: 'Website',
      cell: (element: User) => `${element.website}`,
    },
    {
      columnDef: 'suite',
      header: 'Suite',
      cell: (element: User) => `${element.address.suite}`,
    },
    {
      columnDef: 'city',
      header: 'City',
      cell: (element: User) => `${element.address.city}`,
    },
    {
      columnDef: 'street',
      header: 'Street',
      cell: (element: User) => `${element.address.street}`,
    },
    {
      columnDef: 'zipcode',
      header: 'Zipcode',
      cell: (element: User) => `${element.address.zipcode}`,
    },
    {
      columnDef: 'companyName',
      header: 'Company Name',
      cell: (element: User) => `${element.company.name}`,
    },
    {
      columnDef: 'catchPhrase',
      header: 'Company Catchphrase',
      cell: (element: User) => `${element.company.catchPhrase}`,
    },
  ];

  constructor(
    private fb: FormBuilder,
    private userListService: UserListService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    // this.userListService.getUsers().subscribe((users: User[]) => {
    //   this.dataSource = users;
    //   console.log('UsersListService -> User:', users);
    // });
  }

  initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      name: ['', Validators.required],
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      zipcode: ['', Validators.required],
      website: ['', Validators.required],
      catchPhrase: ['', Validators.required],
      companyName: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log('Submit', this.form.value, this.form.valid);
  }
}
