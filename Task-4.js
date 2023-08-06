function ElectricApp(name, power) {
    this.name = name,
    this.power = power,
    this.isSwitchOn = false
}

ElectricApp.prototype.enable = function () {
    this.isSwitchOn = true
    console.log(`${this.name} включен в питание`)
}

ElectricApp.prototype.disable = function () {
    this.isSwitchOn = false
    console.log(`${this.name} выключен от питание`)
}


function TableLamp(name, power, brightness) {
    ElectricApp.call(this, name, power);
    this.brightness = brightness;
}
TableLamp.prototype = Object.create(ElectricApp.prototype)


TableLamp.prototype.setBbrightness = function (brightness) {
    console.log(`Яркость лампы ${brightness}%`);
}

function Computer(name, power, OC) {
    ElectricApp.call(this, name, power);
    this.OC = OC;
}

Computer.prototype = Object.create(ElectricApp.prototype)


Computer.prototype.setOC = function (OC) {
    console.log(`Операционная система ${OC}`);
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