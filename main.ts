const Commands = require("./Commands.ts")
const Combat = require("./Combat.ts")
const Character = require("./Character.ts")
const Adventure = require("./Adventure.ts")
const Events = require("./Events.ts")

bot.onload(() => {
  const events = new Events()
  const commands = new Commands(events)
  const combatActions = new Combat()
  const charaters = [
    new Character(combatActions, "Kaboos"),
    new Character(combatActions, "Skollie")
  ]
  const StartingAdventure = new Adventure("forest", charaters)
})
