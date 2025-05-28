let fase = 0
let aantal = 3
let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
let range = strip.range(aantal * 0, aantal)
let range1 = strip.range(aantal * 1, aantal)
let range2 = strip.range(aantal * 2, aantal)
let range3 = strip.range(aantal * 3, aantal)
let range4 = strip.range(aantal * 4, aantal)
let range5 = strip.range(aantal * 5, aantal)
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        basic.pause(200)
        fase += 1
    }
    fase = 0
})
basic.forever(function () {
    if (fase == 0) {
        range.showColor(neopixel.colors(NeoPixelColors.Red))
        range1.showColor(neopixel.colors(NeoPixelColors.Green))
        range2.showColor(neopixel.colors(NeoPixelColors.Blue))
        range3.showColor(neopixel.colors(NeoPixelColors.Purple))
        range4.showColor(neopixel.colors(NeoPixelColors.White))
        range5.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
})
basic.forever(function () {
    if (fase == 1) {
        range.showColor(neopixel.colors(NeoPixelColors.Yellow))
        range1.showColor(neopixel.colors(NeoPixelColors.Red))
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        range3.showColor(neopixel.colors(NeoPixelColors.Blue))
        range4.showColor(neopixel.colors(NeoPixelColors.Purple))
        range5.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
basic.forever(function () {
    if (fase == 2) {
        range.showColor(neopixel.colors(NeoPixelColors.White))
        range1.showColor(neopixel.colors(NeoPixelColors.Yellow))
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
        range3.showColor(neopixel.colors(NeoPixelColors.Green))
        range4.showColor(neopixel.colors(NeoPixelColors.Blue))
        range5.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
})
basic.forever(function () {
    if (fase == 3) {
        range.showColor(neopixel.colors(NeoPixelColors.Purple))
        range1.showColor(neopixel.colors(NeoPixelColors.White))
        range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
        range3.showColor(neopixel.colors(NeoPixelColors.Red))
        range4.showColor(neopixel.colors(NeoPixelColors.Green))
        range5.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
basic.forever(function () {
    if (fase == 4) {
        range.showColor(neopixel.colors(NeoPixelColors.Blue))
        range1.showColor(neopixel.colors(NeoPixelColors.Purple))
        range2.showColor(neopixel.colors(NeoPixelColors.White))
        range3.showColor(neopixel.colors(NeoPixelColors.Yellow))
        range4.showColor(neopixel.colors(NeoPixelColors.Red))
        range5.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
