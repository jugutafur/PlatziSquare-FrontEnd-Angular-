import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LearnModule } from './components/learn/learn.module';
import { PlatziSquareModule } from './components/PlatziSquare/platziSquare.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LearnModule,
    PlatziSquareModule
  ],
  exports:[]
})
export class CoreModule { }
