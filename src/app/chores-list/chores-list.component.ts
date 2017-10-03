import { Component, OnInit } from '@angular/core';
import { Chore } from '../shared/chore';
import { ChoreService } from '../services/chore.service';
import {  MdDatepickerModule, MdInputModule, MdCardModule } from '@angular/material';
import { DateforkPipe } from '../datefork.pipe';

@Component({
  selector: 'app-chores-list',
  templateUrl: './chores-list.component.html',
  styleUrls: ['./chores-list.component.scss']
})
export class ChoresListComponent implements OnInit {
  datedebut:Date =new Date('01/01/2017');

  selectedChanged(event){
    console.log(event);
    this.filterarg=event;
  };
  //datedebut ="2017-08-07T17:00:00.000Z";
  chores: Chore[];
  filterarg:Date= this.datedebut;

  constructor(private choreService: ChoreService) { }

  ngOnInit() {

    this.choreService.getChores()
    .subscribe(chores => this.chores = chores);
  }

  
};
