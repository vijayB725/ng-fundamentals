import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EventListComponent } from "./events/event-list/event-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail/event-thumbnail.component";
import { NavComponent } from "./nav/nav.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventService } from "./event.service";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [EventService]
})
export class AppModule {}
