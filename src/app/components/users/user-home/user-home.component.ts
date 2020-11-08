import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agente } from 'src/app/models/agente';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute) { }

    agentes: Agente[];

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

}
