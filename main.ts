basic.forever(function () {
    serial.writeValue("temperature", input.temperature())
    serial.writeValue("luminosite", input.lightLevel())
    basic.showString("A")
    basic.showString("B")
    basic.pause(1000)
})
