import { Component, OnDestroy } from '@angular/core';
import { ItunesService } from './services/itunes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  public music: Array<any>;
  public serch: string;
  private subscription: Subscription;
  public sign = [];
  constructor(private itunes: ItunesService) {

  }

  click(index) {
    if (!this.sign[index]) {
      for (let i = 0; i < this.sign.length; i++) {
        this.sign[i] = false;
      }
    }
    if (this.sign[index]) {
      this.sign[index] = false;
    } else {
      this.sign[index] = true;
    }
  }

  getMusic(data: string) {
    this.subscription = this.itunes.getMusic(data).subscribe(res => {
      this.music = res.results;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
