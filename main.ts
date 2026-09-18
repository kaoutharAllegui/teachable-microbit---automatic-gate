bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (receivedString == "CAR") {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.Yes)
    }
    if (receivedString == "NOTHING") {
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.showIcon(IconNames.No)
    }
})
let receivedString = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
