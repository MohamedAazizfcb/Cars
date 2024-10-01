import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-cards',
  standalone: true,
  imports: [],
  templateUrl: './navigation-cards.component.html',
  styleUrl: './navigation-cards.component.scss'
})
export class NavigationCardsComponent {
  cards = [
    { 
      imgUrl: 'mercedes.jpg', 
      title: 'Mercedes', 
      description: "With a commitment to creating not just living spaces but extraordinary communities, Mercedes‑Benz Places reflects the brand's dedication to innovation and an unparalleled lifestyle experience at multiple touchpoints.",
      url: 'https://www.mercedes-benz.com.eg/en/passengercars/services/manuals.html'
    },
    { 
      imgUrl: 'bmw.jpg', 
      title: 'BMW', 
      description: "Sustainability and circular thinking go hand in hand. Technologies and entrepreneurship help develop solutions that lead us harmoniously into the future. Recycling and conserving resources are an integral part of this journey.",
      url: 'https://www.bmwusa.com/owners-manuals.html'
    },
    { 
      imgUrl: 'porche.jpg', 
      title: 'Porche', 
      description: "A ten Porsche Experience Centres worldwide also offer the opportunity to experience the fascination of Porsche at first hand. Unique worlds of experience fulfil lifelong dreams.",
      url: 'https://manual.porsche.com/#/wpi/enter/pgroup/vhc:911'
    },
  ];

  goTo(url: string){
    window.location.href = url;
  }
}


