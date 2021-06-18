import { Fighter } from "./fighter.js";
export class Monster extends Fighter {
    constructor(name, health, defense, attack, healing) {
        super(name, health, defense, attack, healing);
    }
    monsterAttack() {
        this.currentAttack = Math.floor(Math.random() * this.attack);
        return this.currentAttack;
    }
    monsterHeal() {
        return Math.floor(Math.random() * this.healing);
    }
    monsterTakeDamage() {
        return this.health - this.currentAttack;
    }
}
//# sourceMappingURL=monster.js.map