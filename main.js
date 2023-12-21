money = 10
stitches = 0
yarn = 1000
yarnCost = 5

function crochetStitch() {
    if (yarn > 0) {
        yarn -= 1
        stitches += 1
    }
}

function buyYarn(){
    if (money >= yarnCost) {
        money -= yarnCost
        yarn += 1000
    }
}

function updateGUI(){
    document.getElementById("stitches").innerHTML = stitches
    document.getElementById("money").innerHTML = money
    document.getElementById("yarn").innerHTML = yarn
    document.getElementById("yarn-cost").innerHTML = yarnCost
}

function mainLoop(){
    updateGUI()
}

setInterval(mainLoop, 1000)