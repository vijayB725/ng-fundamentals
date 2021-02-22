import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"]
})
export class EventListComponent implements OnInit {
  eventList = [
    {
      id: 1,
      name: "Angular connect",
      date: "02/23/2021",
      time: "09:00:00",
      price: 599.99,
      location: {
        address: 'The Convention Center & Scuba Shop',
        city: 'Amsterdam',
        country: 'Netherlands'
      }
    },
    {
      id: 2,
      name: "Angular 2.0 Event",
      date: "02/25/2021",
      time: "12:00",
      price: 1000.0,
      location: {
        address: 'The Technology Learning Center',
        city: 'London',
        country: 'England'
      }
    },
    {
      id: 4,
      name: "Ng Conference",
      date: "02/28/2021",
      time: "8:00:00",
      price: 800.0,
      location: {
        address: 'The Adavnce Tech Institute',
        city: 'New York',
        country: 'United States'
      }
    },
    {
      id: 4,
      name: "Ng Webinar",
      date: "03/01/2021",
      time: "09:00",
      price: 700.0,
      location: {
        address: 'Marriot Prime',
        city: 'Goa',
        country: 'India'
      }
    }
  ];

  constructor() {}

  ngOnInit() {}

  registerEvent(event) {
    console.log(event);
  }
}
