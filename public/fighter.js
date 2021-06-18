export class Fighter {
    constructor(name, health, defense, attack, healing) {
        this.healthBar = 120;
        this.name = name;
        this.health = (health * 10) + 100;
        this.defense = (defense * 10) + 100;
        this.attack = (attack * 10) + 100;
        this.healing = (healing * 10) + 100;
    }
}
//# sourceMappingURL=fighter.js.map