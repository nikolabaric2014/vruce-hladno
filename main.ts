let udaljenost = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    udaljenost = maqueen.Ultrasonic(PingUnit.Centimeters)
})
basic.forever(function () {
    strip.showColor(neopixel.rgb(udaljenost * 10, 0, 0))
})
