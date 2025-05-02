# humidity-temperature-sensor

A raspberry pi 0 2 w humidity and temperature sensor

- Raspberry Pi 0 2 W
- HiLetgo DHT22/AM23 (ASAIR AM2302)
- [Raspberry Pi Tutorial: How to Use the DHT-22](https://www.instructables.com/Raspberry-Pi-Tutorial-How-to-Use-the-DHT-22/)
- [onoff](https://github.com/fivdi/onoff)

## pi setup

### Installing the OS

1. install imager
1. select the Raspberry Pi OS (64-bit) image
1. click edit settings
    1. set hostname: `rpi20w`
    1. username: `alpha`
    1. password
    1. WLAN: asus 2G
    1. locale
    1. enable the SSH service: `rpi20w.local`

References

- <https://www.raspberrypi.com/documentation/computers/remote-access.html#ssh>
- <https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager>

### Setting up the web server

1. SSH into the pi
1. run `sudo apt update` and `sudo apt upgrade`
1. run `sudo apt install apache2 -y`
1. verify by navigating to <http://rpi20w.local/>

References

- <https://www.raspberrypi.com/documentation/computers/remote-access.html#set-up-an-apache-web-server>

### Connecting the sensor

1. connect the left pin (i.e. +) to pin 1 for 3,3V of power
1. connect the middle pin (i.e. out) to pin 3 for data
1. connect the right pin (i.e. -) to pin 6 for ground

## raspberry pi 0 2 spec

![rpi pin out](./assets/pinout.jpeg)

## sensor spec

![spec](./assets/AM2302-spec-2022-10-25_03.jpg)

![interface](./assets/AM2302-interface-2022-10-25_04.jpg)
