export class Fighter {
    name:string
    health:number
    healthBar:number
    defense:number
    attack:number
    healing:number

    currentAttack!: number

    constructor(name:string,health:number,defense:number,attack:number,healing:number){
        this.healthBar = 120
        this.name = name
        this.health = (health * 10) + 100
        this.defense = (defense * 10) + 100
        this.attack = (attack * 10) + 100
        this.healing = (healing * 10) + 100

    }
}