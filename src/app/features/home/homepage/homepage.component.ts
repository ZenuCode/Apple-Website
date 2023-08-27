import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  mainText: { large: string, small: string, button: string, button2?: string, image: string}[] = [
    { 
      large: "Save on Mac or iPad for college.", 
      small: "Plus get a gift card up to $150.", 
      button: "Shop now >",
      image: "../../../../assets/b-to-school.jpeg",
    },
    { 
      large: "MacBook Air 15''", 
      small: "Impressively big. Impossibly thin", 
      button: "Learn more >",
      button2: "Buy >",
      image: "../../../../assets/macbook-air15.jpg",
    },
    { 
      large: "iPhone 14", 
      small: "Wonderfull", 
      button: "Learn more >",
      button2: "Buy >",
      image: "../../../../assets/iphone14.jpg",
    },
  ]

  boxText: { large: string, small: string, button: string, button2?: string}[] = [
    { 
      large: "Save on Mac or iPad for college", 
      small: "Plus get a gift card up to $150.", 
      button: "Shop now"
    },
    { 
      large: "MacBook Air 15''", 
      small: "Impressively big. Impossibly thin", 
      button: "Learn more",
      button2: "Buy"
    },
    { 
      large: "iPhone 14", 
      small: "Wonderfull", 
      button: "Learn more",
      button2: "Buy"
    },
  ]

  terms: string[] = [
    "1. Through August 27, 2023, Apple will donate $10 for every purchase made in the U.S. using Apple Pay on apple.com, through the Apple Store app, or at an Apple Store. Donations are limited to a maximum of one million dollars ($1,000,000). The donation goes to the National Park Foundation.",
    "2. Qualified Purchasers receive an Apple Gift Card when they purchase an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift Card per eligible Mac or iPad per Qualified Purchaser. Offer subject to availability. While supplies last. View full terms and conditions of offer here.",
    "To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.",
    "If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.",
    "Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.",
    "A subscription is required for Apple TV+.",
    "Major League Baseball trademarks and copyrights are used with permission of MLB Advanced Media, L.P. All rights reserved.",
  ]
}
