import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letters'
})
export class LettersPipe implements PipeTransform {

  // transform(value: string,limit?:number) {
  //  let actualLimit=limit?limit:100;
  //  let result=value.substr(0,actualLimit)+'...';
  //  return result;
  // }

  transform(value: string) {
    if (!value)
    return null;
    
    let  words= value.split(' ')
    for (let i=0; i<words.length;i++){
      let word= words[i];
      if(i>0 && this.isprepositions(words[i])){
        words[i]=words[i].toLowerCase();
      }else{

      words[i]=words[i].substr(0,1).toUpperCase()+ words[i].substr(1).toLowerCase();
      }
    }
    let result = words.join(' ');
    return result;;

  }

  private isprepositions(word:string):boolean{
    let prepositions:string[]=['and','the', 'an','is','to','a', 'for'];
    return prepositions.includes(word.toLowerCase());
    
  }

}
