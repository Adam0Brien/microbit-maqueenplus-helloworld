radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, acceleration)
    } else if (receivedNumber == 2) {
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, acceleration)
    } else if (receivedNumber == 3) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CCW, acceleration)
    } else if (receivedNumber == 4) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, acceleration)
    }
})
radio.onReceivedString(function (receivedString) {
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
let tilt = 0
let acceleration = 0
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    tilt = input.rotation(Rotation.Pitch)
    acceleration = pins.map(
    tilt,
    -90,
    90,
    0,
    1024
    )
    if (tilt < 30 && tilt > -30) {
        radio.sendString("a")
    } else if (tilt > 30) {
        radio.sendNumber(1)
    } else if (tilt < -30) {
        radio.sendNumber(2)
    }
})
