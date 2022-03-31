import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

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
  isLoadingResults = false;
  columnsToDisplay = [
    'username',
    'email',
    'name',
    'street',
    'suite',
    'city',
    'zipcode',
    'phone',
    'website',
    'companyName',
    'catchPhrase',
  ];
  expandedElement!: PeriodicElement | null;

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private userListService: UserListService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.isLoadingResults = true;
    this.userListService.getUsers().subscribe((users: any) => {
      this.dataSource = new MatTableDataSource(users);
      console.log('UsersListService:', users);
      this.isLoadingResults = false;
    });
  }

  removeUser(id: any) {
    console.log('removeUser', id);
    if (confirm('Are you sure, you want to delete this user?')) {
      this.userListService.removeUser(id).subscribe(() => {
        console.log('delete from backend');
        this.dataSource = this.dataSource.filter((user: any) => user.id !== id);
        console.log(this.dataSource);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    // this.dialog.open(UserComponent);
    console.log('open dialog');
  }
}
