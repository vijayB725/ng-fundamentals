import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EventListComponent } from "./events/event-list/event-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail/event-thumbnail.component";
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
