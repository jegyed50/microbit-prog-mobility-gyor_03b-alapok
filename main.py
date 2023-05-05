def on_button_pressed_a():
    global fel
    if fel == True:
        basic.show_arrow(ArrowNames.SOUTH)
        fel = False
    else:
        basic.show_arrow(ArrowNames.NORTH)
        fel = True
input.on_button_pressed(Button.A, on_button_pressed_a)

fel = False
fel = True
basic.show_arrow(ArrowNames.NORTH)

def on_forever():
    pass
basic.forever(on_forever)
