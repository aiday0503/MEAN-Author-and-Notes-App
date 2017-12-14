import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  notes;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.notes.subscribe(
      (data) => { this.notes = data; }
    );
    this._api.getAllNotes();
  }

}
