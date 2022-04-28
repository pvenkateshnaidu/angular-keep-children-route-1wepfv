import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterModule,
  Routes,
} from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { VisitComponent } from './visit/visit.component';
import { AtcComponent } from './atc/atc.component';
import { ChildgoalComponent } from './childgoal/childgoal.component';

export const routes: Routes = [
  { path: '', redirectTo: 'atc/1', pathMatch: 'full' },
  {
    path: 'atc/:atcId',
    component: AtcComponent,
    children: [
      { path: '', redirectTo: 'goal', pathMatch: 'full' },
      {
        path: 'goal',
        component: GoalComponent,
        children: [{ path: 'goalchild', component: ChildgoalComponent }],
      },
      { path: 'visit', component: VisitComponent },
    ],
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    AtcComponent,
    GoalComponent,
    VisitComponent,
    AtcComponent,
    ChildgoalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
