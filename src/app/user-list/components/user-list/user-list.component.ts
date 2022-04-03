import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { UserListService } from '../../services/user-list.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { UserRequest } from '../../types/user-request';
import { MatDialog } from '@angular/material/dialog';
import { getUsers } from '../../store/actions';
import { isSubmittingSelector, usersSelector } from '../../store/selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class UserListComponent implements OnInit {
  posts: any = [];
  isSubmitting!: boolean;

  users$ = this.store.pipe(select(usersSelector));
  isSubmitting$ = this.store.pipe(select(isSubmittingSelector));

  dataSource: any = [];
  expandedElement: UserRequest | null | undefined;

  columns = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element: UserRequest) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: UserRequest) => `${element.name}`,
    },
    {
      columnDef: 'phone',
      header: 'Phone',
      cell: (element: UserRequest) => `${element.phone}`,
    },
    {
      columnDef: 'username',
      header: 'Username',
      cell: (element: UserRequest) => `${element.username}`,
    },
    {
      columnDef: 'email',
      header: 'Email',
      cell: (element: UserRequest) => `${element.email}`,
    },
    {
      columnDef: 'website',
      header: 'Website',
      cell: (element: UserRequest) => `${element.website}`,
    },
    {
      columnDef: 'suite',
      header: 'Suite',
      cell: (element: UserRequest) => `${element.address.suite}`,
    },
    {
      columnDef: 'city',
      header: 'City',
      cell: (element: UserRequest) => `${element.address.city}`,
    },
    {
      columnDef: 'street',
      header: 'Street',
      cell: (element: UserRequest) => `${element.address.street}`,
    },
    {
      columnDef: 'zipcode',
      header: 'Zipcode',
      cell: (element: UserRequest) => `${element.address.zipcode}`,
    },
    {
      columnDef: 'companyName',
      header: 'Company Name',
      cell: (element: UserRequest) => `${element.company.name}`,
    },
    {
      columnDef: 'catchPhrase',
      header: 'Company Catchphrase',
      cell: (element: UserRequest) => `${element.company.catchPhrase}`,
    },
  ];

  displayedColumns: string[] = this.columns.map((c) => c.columnDef);

  constructor(
    private store: Store,
    public userListService: UserListService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.users$.subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    });
    this.isSubmitting$.subscribe((res) => {
      this.isSubmitting = res;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
