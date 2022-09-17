import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable, switchMap } from 'rxjs';
import { User, UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public user$: Observable<User | undefined> = EMPTY;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('id')),
      switchMap((id) => this.userService.getUser(id))
    );
  }
}
