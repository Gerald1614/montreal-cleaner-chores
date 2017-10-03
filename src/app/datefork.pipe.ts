import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datefork'
})
export class DateforkPipe implements PipeTransform {

  transform(chores: any, filter:Date) {
    if (chores==null) {
      return null;
    }

    return chores.filter(chore => Boolean(new Date(chore.properties.date_debut_corvee) >=filter) && chore.properties.informations_supplementaires!=null);

  }

}
