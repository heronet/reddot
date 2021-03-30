import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  users: any;
  constructor(private userService: UserService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.userService.searchUsers(params.name).subscribe(res => this.users = res)
    });
  }
}
