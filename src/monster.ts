import { Fighter } from "./fighter.js"


export class Monster extends Fighter{

    constructor(name:string,health:number,defense:number,attack:number,healing:number){
        super(name,health,defense,attack,healing)

    }

    monsterAttack():number{
        this.currentAttack = Math.floor(Math.random() * this.attack)
        return this.currentAttack
    }
        

    monsterHeal():number{
        return Math.floor(Math.random() * this.healing)
    }
    monsterTakeDamage():number{
        return this.health - this.currentAttack
    }

}

