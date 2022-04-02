import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
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
export class TableComponent implements OnInit {
  dataSource: any = [];
  isLoadingResults: boolean = false;
  expandedElement: UserRequest | null | undefined;
  posts: any = [];

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
    public userListService: UserListService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoadingResults = true;
    this.userListService.getUsers().subscribe((users: UserRequest[]) => {
      this.dataSource = new MatTableDataSource(users);
      console.log('UsersListService -> Users:', users);
      this.isLoadingResults = false;
    });
  }

  removeUser(id: any) {
    this.isLoadingResults = true;
    console.log('removeUser', id);

    if (confirm('Are you sure you want to remove this user?')) {
      this.userListService.removeUser(id).subscribe(() => {
        console.log('delete from backend');
        this.dataSource._data._value = this.dataSource._data._value.filter(
          (user: any) => user.id !== id
        );
        this.dataSource._updateChangeSubscription();
        this.isLoadingResults = false;
      });
    } else {
      this.isLoadingResults = false;
    }
  }

  getPosts(userId: number): void {
    this.isLoadingResults = true;
    this.userListService.getPosts(userId).subscribe((posts: any) => {
      this.posts = posts;
      console.log('UsersListService -> Posts:', posts);
      this.isLoadingResults = false;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
