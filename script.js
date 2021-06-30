var e = document.getElementById('c1');
var sleep = 0;
var emojis = [
    '&#129416;', '&#127817;', '&#128007;', '&#9830;', '&#128006;',
    '&#127815;', '&#127812;', '&#127810;', '&#127808;', '&#127806;',
    '&#127804;', '&#127800;', '&#127795;', '&#127791;', '&#127786;',
    '&#127785;', '&#127784;', '&#127783;','🐊']; //list for team emojis


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

    rr();
}

function rr(){
    setTimeout(function(){ window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ','_blank')}, 2900);
}