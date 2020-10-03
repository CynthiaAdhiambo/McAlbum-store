import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];
  cardsHandset = [];
  cardsWeb = [];
  
  IsHandset: boolean = false;
  IsHandsetObserver: Observable<boolean>= this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }

      return false;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    public appService: AppService) {}

  ngOnInit(){
    this.IsHandsetObserver.subscribe(currentObserverValue => {
      this.IsHandset = currentObserverValue;

      this.loadCards();
    });

    this.appService.getdeals().subscribe(
      response => {
        this.cardsHandset = response.handsetCards;
        this.cardsWeb = response.webCards;

        this.loadCards();

      },
      error => {
        alert('there was an error displaying the deals. Please try again later!');

      }
    )
  }

  loadCards(){
    this.cards = this.IsHandset? this.cardsHandset: this.cardsWeb;
    
  }

  getImage(imageName: string): string{

    return 'url(' + 'http://localhost:3000/images/' + imageName + '.jpg' +')';
  }
}
