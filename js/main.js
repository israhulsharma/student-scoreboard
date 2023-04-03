let currentScoreHome = 0
let currentScoreGuest = 0

let scoreboardHome = document.getElementById("home-scoreboard")
let scoreboardGuest = document.getElementById("guest-scoreboard")

function add1toHome(){
currentScoreHome += 1
scoreboardHome.innerText = currentScoreHome
whoIsWinning()
}

function add2toHome(){
    currentScoreHome += 2
    scoreboardHome.textContent = currentScoreHome
    whoIsWinning()
}

function add3toHome(){
     currentScoreHome += 3
     scoreboardHome.textContent = currentScoreHome
     whoIsWinning()
}

function add1toGuest(){
    currentScoreGuest += 1
    scoreboardGuest.innerText = currentScoreGuest
    whoIsWinning()
}
    
function add2toGuest(){
    currentScoreGuest += 2
    scoreboardGuest.textContent = currentScoreGuest
    whoIsWinning()
}
    
function add3toGuest(){
    currentScoreGuest += 3
    scoreboardGuest.textContent = currentScoreGuest
    whoIsWinning()
}

function whoIsWinning(){
if(currentScoreGuest > currentScoreHome){
    document.getElementById("whoIsWinning").innerText = "Team Guest is leading"
} else {
    document.getElementById("whoIsWinning").innerText = "Team Home is leading"
}
}