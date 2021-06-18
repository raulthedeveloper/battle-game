interface HealthBars {
    readonly playerBar: HTMLElement | null;
    readonly enemyBar: HTMLElement | null;
}

const healthBars: HealthBars = {
    playerBar: document.getElementById("player-bar"),
    enemyBar: document.getElementById("enemy-bar")
};



export function paintUi(playerHealth:string, enemyHealth:string):void{


    console.log('UI has been painted')
   healthBars.playerBar.style.width = `${playerHealth}%`;

}

export function btnEvents():void{
    document.getElementById('attackbtn')?.addEventListener('click',function(){
        console.log('the attack button was pressed')
    })

    document.getElementById('blockbtn')?.addEventListener('click',function(){
        console.log('the block button was pressed')
    })

    document.getElementById('healbtn')?.addEventListener('click',function(){
        console.log('the heal button was pressed')
    })
}

function drawLog():void{
    // UL and append to children
}

function levelUpModule():void{
    // launches module and passes values to UI from player stats
}

