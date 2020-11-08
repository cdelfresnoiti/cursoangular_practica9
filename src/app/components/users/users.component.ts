import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  users = [
    {
      id: 1,
      name: 'Usuario 1'
    },{
      id: 2,
      name: 'Usuario 2'
    },{
      id: 3,
      name: 'Usuario 3'
    },{
      id: 4,
      name: 'Usuario 4'
    }
  ];

  id: number;

  navegarDetalle(id) {
    this.router.navigate(['/users', id]);
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
