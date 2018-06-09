import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavSidebarComponent } from './components/nav-sidebar/nav-sidebar.component';

const components = [HeaderComponent, NavSidebarComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class CoreModule { }
