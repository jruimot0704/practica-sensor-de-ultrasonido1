let sensor = 0
cuteBot.forward()
basic.forever(function () {
    sensor = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    basic.showNumber(sensor)
    if (sensor < 20 && sensor > 21) {
        basic.pause(randint(100, 200))
    } else {
        cuteBot.forward()
    }
})
