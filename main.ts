const { Commands } = require("./Commands.ts")
const { Combat } = require("./Combat.ts")
const { Character } = require("./Character.ts")
const { Adventure } = require("./Adventure.ts")
const { Events } = require("./Events.ts")
const { NewCore } = require("./NewCore.ts")

class MainEventHandler {
  currentAdventures: typeof Adventure[] = []
  currentCharacters: typeof Character[] = []
  commands!: typeof Commands
  combatActions!: typeof Combat
  newCore!: typeof NewCore
  constructor() {
    const events = new Events()
    this.commands = new Commands(events)
    this.combatActions = new Combat()
    this.newCore = new NewCore(this)
  }

  addNewPlayers(names: string[]) {
    names.map(name => {
      this.currentCharacters.push(new Character(this.combatActions, name))
    })
  }

  newAdventure(zone) {
    this.currentAdventures.push(new Adventure(zone, this.currentCharacters))
  }
}

const MainEventHandlerInstance = new MainEventHandler()

bot.on("load", () => {
  MainEventHandlerInstance.addNewPlayers([
    "Skollie",
    "Kaboos",
    "Doorne",
    "Anleus"
  ])
  MainEventHandlerInstance.newAdventure("forest")
})

bot.on("message", arg => {
  if (message === "new adventure") {
    MainEventHandlerInstance.newAdventure(arg)
  }
})
