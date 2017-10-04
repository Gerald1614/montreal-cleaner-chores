import { Component, OnInit } from '@angular/core';
import { Chore } from '../shared/chore';
import { ChoreService } from '../services/chore.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {
  title: string = 'map of chores';
  lat: number = 45.5088400;
  lng: number = -73.5878100;
  chores: Chore[];

  constructor(private choreService: ChoreService) { }

  ngOnInit() {
    this.choreService.getChores()
    .subscribe(chores => this.chores = chores);
  }

}
