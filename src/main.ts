import { paintUi,btnEvents } from './ui.js'
import { Monster } from './monster.js'
import { Player } from './player.js'


export interface Fighter {
    name:string,
    health:number,
    defense:number,
    attack:number,
    healing:number,
    currentAttack:number,
    healthBar:number
}


let raul:Fighter = new Player('Raul',2,4,6,2)

let eddy:Fighter = new Monster('Eddy',2,1,4,2)



paintUi(raul.healthBar.toString(),eddy.healthBar.toString())
btnEvents()

console.log(eddy)
console.log(raul.healthBar)