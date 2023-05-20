import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemDto } from 'src/app/shared/item.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  // Service used to get data from given URL
  constructor(private httpClient: HttpClient) { }

  jsonDataUrl = 'http://jsonplaceholder.typicode.com';
  postsUrl = '/posts';

  getByIdUrl = "/posts?id=";
  // usersUrl = '/users';
  
  getPostsData() {
   return this.httpClient.get(this.jsonDataUrl+this.postsUrl);
  }

  getDataById(id : number): Observable<any>{
    return this.httpClient.get(this.jsonDataUrl+this.getByIdUrl + id);
  }

  putData(item: ItemDto): Observable<any> {
    return new Observable((observer) => {
      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          observer.next(json); 
          observer.complete(); 
        });
    });
  }
  
}
