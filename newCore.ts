class NewCore {
  mainRef
  constructor(mainRef) {
    this.mainRef = mainRef
  }

  doSomething() {
    this.mainRef.addNewPlayers(["bob"])
  }

  doSomethingElse() {
    this.mainRef.commands.callEventCommand("event1", "lol")
  }
}
