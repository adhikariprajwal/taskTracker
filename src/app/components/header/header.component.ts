import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = `Prajwal's Tasks`;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("toggle add task clicked")
  }

}
