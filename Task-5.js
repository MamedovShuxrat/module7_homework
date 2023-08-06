class ElectricApp {
    constructor(name, power) {
        this.name = name,
            this.power = power,
            this.isSwitchOn = false
    }
    enable() {
        this.isSwitchOn = true
        console.log(`${this.name} включен в питание`)
    }

    disable() {
        this.isSwitchOn = false
        console.log(`${this.name} выключен от питание`)
    }
}


class TableLamp extends ElectricApp {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    setBbrightness(brightness) {
        console.log(`Яркость лампы ${brightness}%`);
    }
}

class Computer extends ElectricApp {
    constructor(name, power, OC) {
        super(name, power);
        this.OC = OC;
    }

    setOC(OC) {
        console.log(`Операционная система ${OC}`);
    }
}

const lamp = new TableLamp('Настольная лампа', 24, 80)
const laptop = new Computer('Домашний ноутбук', 12, 'Ubuntu')

console.log(lamp)
console.log(laptop)

lamp.enable()
laptop.enable()


function wattMeter(arr) {
    let res = 0
    arr.forEach(element => {
        if (element.isSwitchOn) {
            res += element.power
        }
    });
    return res
}

const totalPower = wattMeter([lamp, laptop]);
console.log(totalPower)