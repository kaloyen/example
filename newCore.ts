class NewCore {
  mainRef
  constructor(mainRef) {
    this.mainRef = mainRef
  }

  doSomething() {
    this.mainRef.addNewPlayers(["bob"])
  }
}
