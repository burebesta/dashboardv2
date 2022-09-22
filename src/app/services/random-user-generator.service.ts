import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class randomUserGeneratorService{

  constructor(private http: HttpClient) { }
  apiUrl:string = environment.randomUserUrl

  getRandomUser(x:any){  
    return this.http.get(this.apiUrl+`size=${x.count}`)
  }
}
