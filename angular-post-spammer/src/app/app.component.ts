import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles = new Array<string>();
  addArticle(text: HTMLInputElement, num: HTMLInputElement): boolean {
    let cont = Number(num.value);
    console.log(`spamText: ${text.value} and spamNum: ${num.value}`);
    for(let i:number =0; i< cont; i++)  //Ciclo For in typescript
    {
      this.articles.push(text.value);
    }
    return false;
  }
}
