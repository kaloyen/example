export class Combat {
  attack(character1, character2) {
    if (character1.accuracy > character2.dodge) {
      character2.hp = character2.hp - 5
    }
  }
  defend(character1, character2) {
    if (character1.defense < character2.attack) {
      character1.hp = character1.hp - 5
    }
  }
}
