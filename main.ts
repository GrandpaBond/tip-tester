let Change = 0
let TipWas = 0
let Tip = input.rotation(Rotation.Pitch)
basic.forever(function () {
    TipWas = Tip
    Tip = input.rotation(Rotation.Pitch)
    Change = Tip - TipWas
    if (Change > 5) {
        basic.showArrow(ArrowNames.South)
    } else if (Change < -5) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(50)
})
