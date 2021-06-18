import { Fighter } from "./fighter.js"

export class Player extends Fighter{
    constructor(name:string,health:number,defense:number,attack:number,healing:number){
        super(name,health,defense,attack,healing)

    }

    playerAttack():number{
        this.currentAttack = Math.floor(Math.random() * this.attack)
        return this.currentAttack
    }
        

    playerHeal():number{
        return Math.floor(Math.random() * this.healing)
    }
    playerTakeDamage():number{
        return this.health - this.currentAttack
    }

}

