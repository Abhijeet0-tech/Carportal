import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carfilter'
})
export class CarfilterPipe implements PipeTransform {

  transform(dataArray: any[], searchTerm: string) {
    if(!searchTerm){
      return dataArray;
    }
    else{
    return dataArray.filter(carobj=>carobj.carname.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
    }
  }

}
