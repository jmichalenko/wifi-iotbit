ESP8266ThingSpeak.connectWifi(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate115200,
"iPhone",
"12345678"
)
basic.pause(5000)
if (ESP8266_IoT.wifiState(true)) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    basic.showIcon(IconNames.SmallDiamond)
    ESP8266_IoT.setData(
    "6DTZYAESV2LNRLWW",
    input.temperature()
    )
    basic.showIcon(IconNames.Square)
    ESP8266_IoT.uploadData()
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
})
