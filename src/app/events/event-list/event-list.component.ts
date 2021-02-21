import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  eventList = {
    id: 1,
    name: "Angular connect",
    date: "02/23/2021",
    time: "09:30:00",
    price: 599.99,
    location: "Pittsburg"
  };

  constructor() {}

  ngOnInit() {}

  registerEvent(event) {
    console.log(event);
  }
}
