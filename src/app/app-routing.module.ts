import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { FrontComponent } from './components/front/front.component';
import { ResultComponent } from './components/result/result.component';
import { ContainComponent } from './components/contain/contain.component';

//import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'Start', component: StartComponent },
  { path: 'questions', component: ContainComponent, pathMatch: 'full' },
  { path: 'begin', component: FrontComponent },
  { path: 'result', component: ResultComponent },
  { path: '', redirectTo: 'begin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  StartComponent,
  FrontComponent,
  ResultComponent,
];
