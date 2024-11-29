import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit{
  @Input() data: {
    title: string;
    age: string;
    description: string;
    img: string | null;
  } | null = null;

  constructor(
  
  ){}

  ngOnInit(): void {}
}
