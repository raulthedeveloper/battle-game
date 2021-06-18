import { paintUi, btnEvents } from './ui.js';
import { Monster } from './monster.js';
import { Player } from './player.js';
let raul = new Player('Raul', 2, 4, 6, 2);
let eddy = new Monster('Eddy', 2, 1, 4, 2);
paintUi(raul.healthBar.toString(), eddy.healthBar.toString());
btnEvents();
console.log(eddy);
console.log(raul.healthBar);
//# sourceMappingURL=main.js.map