import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { ToTemperaturePipe } from './pipes/to-temperature.pipe';
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { DemoDirectivesStructuralComponent } from './demo-directives-structural/demo-directives-structural.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ExoSpoilerComponent } from './exo-spoiler/exo-spoiler.component';
import { ExoMenuComponent } from './exo-menu/exo-menu.component';
import { LinkComponent } from './exo-menu/link/link.component';
import { LoginComponent } from './login/login.component';
import { ExoShoppingListComponent } from './exo-shopping-list/exo-shopping-list.component';
import { ShoppingItemComponent } from './exo-shopping-list/shopping-item/shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DemoBindingComponent,
    DemoPipesComponent,
    ToTemperaturePipe,
    DemoDirectivesComponent,
    DemoDirectivesStructuralComponent,
    AccordionComponent,
    ExoSpoilerComponent,
    ExoMenuComponent,
    LinkComponent,
    LoginComponent,
    ExoShoppingListComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule
  ],
  providers: [],
	exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
