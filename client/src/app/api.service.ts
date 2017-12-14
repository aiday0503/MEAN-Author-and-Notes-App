import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class ApiService {
  notes = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getAllNotes() {
    this._http.get('/all').subscribe(
      (response: any[]) => {
        this.notes.next(response);
      }
    );
  }

  newNote(note) {
    this._http.post('/new', note).subscribe(
      (response: any[]) => {
        this.getAllNotes();
       }
    );
  }

}
