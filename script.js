var e = document.getElementById('c1');
var sleep = 0;
var emojis = ['&#129416;', '&#127817;', '&#127954;', '&#9830;' ]; //list for team emojis


function sleepHours() {
    let guild = e.value;
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    if(hours <= 12){
        sleep = (12 - hours) + 12 + 7;
    } else {
        sleep = (24 - hours) + 7;
    }
    displayEmojis(guild, sleep);
}

function displayEmojis(guild, hrs){
    let stmt = ''
    for (let index = 0; index < hrs; index++) {
        const element = emojis[index];
        stmt += emojis[guild] + ' ';
    }
    document.getElementById('output').innerHTML = stmt + " hrs to sleep..." 
}