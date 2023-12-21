stitches = 0
yarn = 1000

function crochetStitch() {
    if (yarn > 0) {
        yarn -= 1
        stitches += 1
    }
}

function updateGUI(){
    document.getElementById("stitches").innerHTML = stitches
    document.getElementById("yarn").innerHTML = yarn
}

function mainLoop(){
    updateGUI()
}

setInterval(mainLoop, 1000)