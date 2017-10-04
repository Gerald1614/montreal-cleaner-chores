import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datesort'
})
export class DatesortPipe implements PipeTransform {
  transform(chores: any[], field='properties.date_debut_corvee'): any[] {
    if (chores==null) {
      return null;
    }
      console.log(chores[0].properties.date_debut_corvee);

    chores.sort((left:any, right:any)=> {
      if (left.properties.date_debut_corvee > right.properties.date_debut_corvee) return 1;
      if (left.properties.date_debut_corvee < right.properties.date_debut_corvee) return -1;
      return 0;
    }); 
  return chores;
  } 

}
