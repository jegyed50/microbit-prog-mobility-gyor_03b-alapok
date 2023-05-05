input.onButtonPressed(Button.A, function () {
    if (fel == true) {
        basic.showArrow(ArrowNames.South)
        fel = false
    } else {
        basic.showArrow(ArrowNames.North)
        fel = true
    }
})
let fel = false
led.setBrightness(50)
music.setVolume(255)
fel = true
basic.showArrow(ArrowNames.North)
basic.forever(function () {
	
})
