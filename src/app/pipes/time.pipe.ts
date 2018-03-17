import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let min = ~~(value / 1000 / 60);
    let sec = ~~(value / 1000 % 60);
    if( sec < 10){
      return min + ':0' + sec;
    }
    return min + ':' + sec;
  }
}
