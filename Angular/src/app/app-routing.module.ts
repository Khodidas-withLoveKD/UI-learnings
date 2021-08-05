import { AngularMainPageComponent } from './angular-main-page/angular-main-page.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'drag-and-drop', component: DragAndDropComponent},
  {path: 'angular-main-page', component: AngularMainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DragAndDropComponent,
  AngularMainPageComponent
]
