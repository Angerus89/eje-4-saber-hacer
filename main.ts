input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        # # # . #
        `)
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    basic.showString(" EL PROBLEMA")
    basic.showIcon(IconNames.Skull)
    basic.pause(100)
    basic.showString(" EL MAL USO DE LAS")
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    images.createBigImage(`
        . # # # . # . # # #
        . . # . . # . # . .
        . . # . . # . # . .
        . . # . . # . # . .
        . . # . . # . # # #
        `).scrollImage(2, 200)
    basic.pause(1000)
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # .
        . . . # .
        . # # # .
        . . . # .
        # # # # .
        `)
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
    basic.showString("NUESTRO PRODUCTO")
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    sonification.playSensor(sonification.InputSensor.AccelerationX, 131, sonification.chooseScale(sonification.Scale.Major))
    basic.showString("USAR LAS TIC PARA EDUCAR ")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
    basic.showString(" EL INCONSCIENTE, SUBCONSCIENTE Y EL CONSIENTE")
    basic.showString(" DE LOS")
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . # . # .
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            # # # # #
            . . # . .
            . # # # .
            # . . . #
            `)
    }
    basic.pause(1000)
    basic.showString(" DE FORMA")
    basic.showIcon(IconNames.House)
    basic.showString(" 1. CREATIVA")
    basic.showIcon(IconNames.Happy)
    basic.showString(" 2. DIVERTIDA")
    basic.showIcon(IconNames.Chessboard)
    basic.showString(" 3. TECNOLOGICA")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # .
        . . . # .
        # # # # .
        # . . . .
        # # # # .
        `)
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    basic.showString("LA SOLUCION ")
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
    basic.pause(1000)
    basic.showString("EDUCANDO EN:")
    basic.showIcon(IconNames.Square)
    basic.showString(" 1. MEMORIA Y ATENCION")
    basic.showIcon(IconNames.SmallSquare)
    basic.showString(" 2. PENSAMIENTO CRITICO")
    basic.showIcon(IconNames.LeftTriangle)
    basic.showString(" 3. USO DE LA LOGICA")
    basic.showIcon(IconNames.Chessboard)
    basic.showString(" 4. RESOLUCION DE PROBLEMAS ")
    basic.showIcon(IconNames.Yes)
    basic.showString(" 5. CORDINACION")
    basic.showIcon(IconNames.StickFigure)
    basic.showString(" 6. HABILIDADES MOTORAS")
    basic.showArrow(ArrowNames.SouthEast)
    basic.clearScreen()
})
music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.InBackground)
basic.showString("HOLA A TODOS")
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
}
basic.showString(" BIENVENIDOS")
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.InBackground)
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.West)
}
basic.clearScreen()
