import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  note = {
    author: '',
    body: ''
  };

  constructor(private _api: ApiService) { }

  ngOnInit() {
  }
  createNote(){
    this._api.newNote(this.note);
    this.note = { author: '', body: ''};
  }

}
