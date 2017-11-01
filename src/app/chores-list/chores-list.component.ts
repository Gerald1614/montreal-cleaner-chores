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
  
  chores: Chore[];
  filterarg:Date= this.datedebut;

  constructor(private choreService: ChoreService) { }

  ngOnInit() {

    this.choreService.getChores()
    .subscribe(chores => this.chores = chores);
  }
 
onParticipate(chore){
  console.log(chore);
  (chore.properties.parametre_inscription) ? alert(chore.properties.parametre_inscription + ", veuillez contacter l'arrondissement :"+ chore.properties.arrondissement) : alert("veuillez contacter l'arrondissement: "+ chore.properties.arrondissement);
  };
};
