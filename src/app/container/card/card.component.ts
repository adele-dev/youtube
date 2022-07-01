import { Component, Input, OnInit, Output } from '@angular/core';
import { VideoCard } from 'src/app/models/videoCard.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() videoCard:VideoCard = new VideoCard("","","",7000000,"",false);

  

  constructor() { }

  ngOnInit(): void {
  }

}
