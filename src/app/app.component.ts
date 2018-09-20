import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hm1';

  public result1: number | string;
  public result2: number | string;
  public sortArr: (number | string)[] = [];
  

  public users: User[] = [
    {
      name: "",
      surname: ""
    }
  ]

  public salaries = {
    "Vasya" : 100,
    "Petya" : 300,
    "Dasha" : 250
  }
  _clearAll(){
    this.result1 = "";
    this.result2 = "";
    this.sortArr = [];
  }
  _onSum(a:string, b:string){
    this._clearAll();
    this.result1 = parseInt(a) + parseInt(b);
  }
  _onFixed(a:string, b:string){
    this._clearAll();
    this.result1 = parseFloat(a).toFixed(2);
    this.result2 = parseFloat(b).toFixed(20);
  }
  _sumFixed(a:string, b:string){
    this._clearAll();
    this.result1 = (parseFloat(a) + parseFloat(b)).toFixed(2);
  }
  _onCycle(){
    this._clearAll();
    let i:number = 0;   
    while (i < 11){
      i += 0.2;
      if(i > 9.8 && i < 10.2){
        this.result1 = i;
      }
    }
  }
  _decimal(a:string){
    this._clearAll();
    let b:number = parseFloat(a);
    this.result1 = b > 0 ? b - Math.floor(b) : Math.ceil(b) - b;
  }
  _Fib(a:string, b:string){
    this._clearAll();
    let phi: number = (1 + Math.sqrt(5)) / 2;
    this.result1 = Math.round(Math.pow(phi, parseInt(a)) / Math.sqrt(5));

    let c:number = 1,
        d:number = 0,
        e:number;
    for( let i:number = 0 ; i < parseInt(b); i++){
      e = c + d;
      c = d;
      d = e;
    }
    this.result2 = d;
  }
  _random(a:string, b:string){
    this._clearAll();
    this.result1 = (parseInt(a) + Math.random() * (parseInt(b) - parseInt(a)));
  }
  _randomInt(a:string, b:string){
    this._clearAll();
    this.result1 = Math.floor(parseInt(a) + Math.random() * (parseInt(b) + 1 - parseInt(a)))
  }
  //First latter Upper
  _firstUpper(a:string){
    this._clearAll();
    if(a){
      this.result1 = a[0].toUpperCase() + a.slice(1);
    }
  }
  //Change str to ...
  _truncate(a:string, b:string){
    this._clearAll();
    if(a.length > parseInt(b)){
      this.result1 = a.slice(0, parseInt(b) - 3) + '...';
    }else{
      this.result1 = a;
    }
  }
  // Extract from "$120" number
  _extractCurrencyValue(a:string){
    this._clearAll();
    this.result1 = parseFloat(a.slice(1)).toFixed(2);
  }
  //Input users.name && users.surname
  _ChangeName(a:string, b:string){
    this._clearAll();
    this.users[0].name = a;
    this.users[0].surname = b;
  }
  // Delete users.name
  _deleteName(){    
    this._clearAll();
    delete this.users[0].name;
  }
  // Max value from object
  _maxName(){
    this._clearAll();
    let max =0;
    let maxName = "";
    for (let name in  this.salaries){
      if(max < this.salaries[name]){
        max = this.salaries[name];
        maxName = name;
      }
    }
    this.result1 = maxName || "нет сотрудников";
  }
  // Arr && index
  _fruitLength(){
    this._clearAll();
    let fruits: string[] = ["яблоко", "груша", "слива"];
    this.result1 = fruits[fruits.length - 1];
  }
  // split "-" and Upper
  _camelize(a:string){
    this._clearAll();
    let arr: string[] = a.split("-");
    for (let i = 1; i < arr.length; i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    this.result1 = arr.join('');
  }
  // https://www.codewars.com/kata/highest-and-lowest/discuss/csharp
  _sortArr(a:string){
    this._clearAll();
    let arr: string[] = a.split(" "),
    arr1:number[] = [];
    for(let i:number = 0; i < arr.length; i++){
      arr1.push(parseInt(arr[i]));
    }
    arr1.sort((a,b) =>{
      return a - b ;
    })
    this.sortArr.push( "Array Min value:",arr1[0], "Array Max value:",arr1[arr1.length-1]);
  }
  // https://www.codewars.com/kata/count-by-x
  _functionOfList(a:string, b:string){
    this._clearAll();
    this.sortArr.push("Values of list:");
    let a1:number = parseInt(a),
        b1:number = parseInt(b);
    if(a1 < b1){
      while ( a1 <= b1){
        this.sortArr.push(a1);
        a1++;
      };
    }else if(a1 > b1){
      while ( a1 >= b1){
        this.sortArr.push(a1);
        a1--;
      };
    }else{
      this.sortArr.push(a1);
    }
  }
    
}
