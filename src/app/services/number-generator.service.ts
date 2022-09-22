import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NumberInterface } from '../store/random-number-store/number.interface';

@Injectable({
  providedIn: 'root'
})
export class NumberGeneratorService{

  constructor(private http: HttpClient) { }
  apiUrl:string = environment.randomNumberUrl

  getRandomNumbers(x:NumberInterface){  
    return this.http.get(this.apiUrl+`?min=${x.lowNumber}&max=${x.highNumber}&count=${x.count}`)
  }
}
