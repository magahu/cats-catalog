import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from 'src/app/models/breed-response.models';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private api_url = 'https://api.thecatapi.com/v1'
  private api_key = '79f5d541-7560-4851-8d52-5447c7d2b0ba'
  private headers = new HttpHeaders({
    'x-api-key': this.api_key
  })

  constructor(private httpClient: HttpClient) {
   }

  public searchCatBreeds():Observable<any> {

    return this.httpClient.get<Breed[]>(this.api_url + '/breeds', {headers:this.headers});
  }

  public searchBreed(id: string): Observable<any>{
    return this.httpClient.get<Breed>(this.api_url + '/breeds/search?q=' + id, {headers:this.headers})
  }

}
