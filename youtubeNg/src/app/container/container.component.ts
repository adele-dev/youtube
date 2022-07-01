import { Component, OnInit } from '@angular/core';
import { VideoCard } from '../models/videoCard.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  videosList:VideoCard[] = [
    new VideoCard("assets/img/img1.png", "Les Bobo's", "PalmaShow", 7000000, 'il y a 2 mois',false),
    new VideoCard("assets/img/img2.png", "Fous rires cultes", "INA", 560000, 'il y a 2 mois',false),
    new VideoCard("assets/img/img3.png", "Les vendeurs IKEA", "PalmaShow", 2500000, 'il y a 2 mois',false),
    new VideoCard("assets/img/img4.png", "Versez l'oeuf dans du lait", "Lezzet", 136000, 'il y a 2 mois',false),
    new VideoCard("assets/img/img5.png", "CSS Menu isometric", "Online tutorials", 710051, 'il y a 2 mois',false),
    new VideoCard("assets/img/img6.png", "Paranormal", "Arte", 9000000, 'il y a 2 mois',false),
    new VideoCard("assets/img/img7.png", "La discipline personnelle", "Livres utiles", 457000, 'il y a 2 mois',false),
    new VideoCard("assets/img/img8.png", "Le rendez-vous de Paul", "Jérémy Ferrari", 847000, 'il y a 2 mois',false),
    new VideoCard("assets/img/img9.png", "Le Flambeau", "Canal +", 2100000, 'il y a 2 mois',false),
    new VideoCard("assets/img/img10.png", "Apprendre JS", "Javascript Lab", 125000, 'il y a 2 mois',false),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
