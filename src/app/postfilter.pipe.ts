import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postfilter'
})
export class PostfilterPipe implements PipeTransform {

  transform(items: any[], filter: string, tag: string): any {
    console.log('in pipe', filter, tag);
    if (!items || !filter || !tag) {
      return items;
    }
    if(tag === 'Others wish-list') {
      return items.filter(item => item.wishlist.includes(filter.toLowerCase()));
    }else{
      return items.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
  }

}
