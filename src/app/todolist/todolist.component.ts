import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  todolistData=[
    {"todo":"Tutorial"},
    {"todo":"Edit video"},
    {"todo":"Update stocks"},
    {"todo":"Make review"},
    {"todo":"Backup files"},
  ]
  ngOnInit(): void {
  }

}
