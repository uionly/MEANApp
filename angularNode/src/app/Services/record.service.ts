import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class RecordService {
  getAllRecord(url){
     return this.http.get(url).pipe(map(data => data));
  }
  addRecord(url,postData){
    return this.http.post(url,postData);
  }
  deleteRecord(url,postData){
     return this.http.post(url,postData);
  }
  updateRecord(url,postData){
   return this.http.put(url,postData)
  }

  constructor(private http:HttpClient) { }
}
