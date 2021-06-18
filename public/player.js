import { Fighter } from "./fighter.js";
export class Player extends Fighter {
    constructor(name, health, defense, attack, healing) {
        super(name, health, defense, attack, healing);
    }
    playerAttack() {
        this.currentAttack = Math.floor(Math.random() * this.attack);
        return this.currentAttack;
    }
    playerHeal() {
        return Math.floor(Math.random() * this.healing);
    }
    playerTakeDamage() {
        return this.health - this.currentAttack;
    }
}
//# sourceMappingURL=player.js.map