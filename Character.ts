export class Character {
  combatActions = undefined
  hp = 20
  name
  constructor(combatActions, name) {
    this.combatActions = combatActions
    this.name = name
  }

  performCombatAction(actionName, args) {
    this.combatActions[actionName](...args)
  }
}
