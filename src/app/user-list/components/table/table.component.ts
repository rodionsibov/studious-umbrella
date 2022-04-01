import { Component, OnInit, ViewChild } from '@angular/core';
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
import { User } from '../../types/user';
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
  expandedElement: User | null | undefined;
  posts: any = [];

  columns = [
    {
      columnDef: 'id',
      header: 'Id',
      cell: (element: User) => `${element.id}`,
    },
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
      columnDef: 'companyNama',
      header: 'Company Name',
      cell: (element: User) => `${element.company.name}`,
    },
    {
      columnDef: 'catchPhrase',
      header: 'Company Catchphrase',
      cell: (element: User) => `${element.company.catchPhrase}`,
    },
  ];

  displayedColumns: string[] = this.columns.map((c) => c.columnDef);

  constructor(private store: Store, private userListService: UserListService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoadingResults = true;
    this.userListService.getUsers().subscribe((users: User[]) => {
      this.dataSource = new MatTableDataSource(users);
      console.log('UsersListService -> Users:', users);
      this.isLoadingResults = false;
    });
  }

  removeUser(id: any) {
    this.isLoadingResults = true;
    console.log('removeUser', id);
    // this.dialog.open(UserComponent);

    if (confirm('Are you sure, you want to remove this user?')) {
      this.userListService.removeUser(id).subscribe(() => {
        console.log('delete from backend');
        this.dataSource._data._value = this.dataSource._data._value.filter(
          (user: any) => user.id !== id
        );
        this.dataSource._updateChangeSubscription();
        this.isLoadingResults = false; 
      });
    }
  }

  addUser() {
    console.log('addUser');
    const uniqueId = Math.random().toString(16).slice(2);
    const newUser = {
      user: {
        id: uniqueId,
      },
    };
    this.userListService.addUser().subscribe((newUser) => {
      console.log(newUser);
      this.dataSource.push(newUser);
    });
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
