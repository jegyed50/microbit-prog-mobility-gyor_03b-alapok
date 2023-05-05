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
fel = true
basic.showArrow(ArrowNames.North)
basic.forever(function () {
	
})
