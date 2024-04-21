input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    serial.writeValue("touche", 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    serial.writeValue("touche", 2)
})
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
