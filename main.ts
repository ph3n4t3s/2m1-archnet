input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    radio.sendValue("Touche", 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    radio.sendValue("Touche", 2)
})
radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        basic.showString("A")
    } else if (value == 2) {
        basic.showString("B")
    }
})
radio.setGroup(10)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
})
