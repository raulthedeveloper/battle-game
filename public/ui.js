const healthBars = {
    playerBar: document.getElementById("player-bar"),
    enemyBar: document.getElementById("enemy-bar")
};
export function paintUi(playerHealth, enemyHealth) {
    console.log('UI has been painted');
    healthBars.playerBar.style.width = `${playerHealth}%`;
}
export function btnEvents() {
    var _a, _b, _c;
    (_a = document.getElementById('attackbtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        console.log('the attack button was pressed');
    });
    (_b = document.getElementById('blockbtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        console.log('the block button was pressed');
    });
    (_c = document.getElementById('healbtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        console.log('the heal button was pressed');
    });
}
function drawLog() {
    // UL and append to children
}
function levelUpModule() {
    // launches module and passes values to UI from player stats
}
//# sourceMappingURL=ui.js.map