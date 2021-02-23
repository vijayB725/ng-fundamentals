import { Component, OnInit } from "@angular/core";
import { EventService } from "./event.service";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"],
  providers: [EventService]
})
export class EventListComponent implements OnInit {
  eventList: any[];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventList = this.eventService.getEventList();
  }

  registerEvent(event) {
    console.log(event);
  }
}
