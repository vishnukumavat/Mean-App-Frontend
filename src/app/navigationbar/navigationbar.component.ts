import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css'],
})
export class NavigationbarComponent implements OnInit {
  constructor(private titleService: Title) {}
  ngOnInit(): void {}
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
