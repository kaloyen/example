export class Commands {
  events = undefined
  constructor(events) {
    this.events = events
  }
  callEventCommand(eventName, args) {
    this.events[eventName](...args)
  }
}
