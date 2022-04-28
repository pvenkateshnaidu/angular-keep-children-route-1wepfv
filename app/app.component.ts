import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  atcList = [{ id: 1 }, { id: 2 }, { id: 3 }];

  constructor(private route: ActivatedRoute,
    private router: Router) {

  }


  navigateToAtc(atcId: number) {
    if (atcId) {
      this.router.navigate(['../', atcId], { relativeTo: this.route });
    }
  }
}
