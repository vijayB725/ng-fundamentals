import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.css"]
})
export class EventThumbnailComponent implements OnInit {
  @Input() events: any;
  @Output() register = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleRegister() {
    alert("registered for event");
    this.register.emit(this.events.name);
  }

  // call this function from parent component using reference variable #thumbnailCmp
  logEvent() {
    console.log("call from parent cmp using reference variable");
  }
}
