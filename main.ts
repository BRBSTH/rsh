input.onButtonPressed(Button.A, function () {
    led.plot(0, 0)
    led.setDisplayMode(DisplayMode.BlackAndWhite)
})
input.onButtonPressed(Button.AB, function () {
    led.stopAnimation()
    led.enable(false)
})
input.onButtonPressed(Button.B, function () {
    led.enable(true)
})
basic.forever(function () {
	
})
