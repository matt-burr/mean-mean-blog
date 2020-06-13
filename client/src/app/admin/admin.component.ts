import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public title: string;
  public shortContent: string;
  public longContent: string;

  constructor() {}

  ngOnInit(): void {}

  addPost() {
    console.log(this.title, this.shortContent, this.longContent);
  }
}
