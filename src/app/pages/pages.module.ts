import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import { FlexLayoutSharedModule } from '../shared/flex-layout.module';
import { MaterialSharedModule } from '../shared/material.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FlexLayoutSharedModule,
    MaterialSharedModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }