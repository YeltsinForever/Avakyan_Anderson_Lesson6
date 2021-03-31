class Car{
#brand; 
#model; 
#yearOfManufacturing; 
#maxSpeed; 
#maxFuelVolume; 
#fuelConsumption;
#currentFuelVolume = 0; 
#isStarted = false; 
#mileage = 0; 
set brand(value){
    if(typeof value !== "string" ) throw new Error('err');
    var arr = value.length;
    if(arr< 1 || arr > 50) throw new Error('err');
    this.#brand = value;
}
get brand(){
    return this.#brand;
}

set model(value){
    if(typeof value !== "string" || value == undefined) throw new Error('err');
    var arr = value.length;
    if(arr< 1 || arr > 50) throw new Error('err');
    
    this.#model = value;
}
get model(){
    return this.#model;
}

set yearOfManufacturing(value){
    if(typeof value !== "number" || value == undefined) throw new Error('err');
    if(value< 1900 || value>2021) throw new Error('err');
    this.#yearOfManufacturing = value;
}
get yearOfManufacturing(){
    return this.#yearOfManufacturing;
}

set maxSpeed(value){
    if(typeof value !== "number" || value== undefined || value == NaN) throw new Error('err');
    if(value< 100 || value>300) throw new Error('err');
    this.#maxSpeed = value;
}
get maxSpeed(){
    return this.#maxSpeed;
}

set maxFuelVolume(value){
    if(typeof value !== "number" || value == undefined || value == NaN) throw new Error('err');
    if(value< 5 || value>20) throw new Error('err');
    this.#maxFuelVolume = value;
}
get maxFuelVolume(){
    return this.#maxFuelVolume;
}

set fuelConsumption(value){
    if(typeof value !== "number" || value == undefined || value == NaN) throw new Error('err');
    value = value / 100;
    this.#fuelConsumption = value;
}
get fuelConsumption(){
    return this.#fuelConsumption;
}

get currentFuelVolume(){
    return this.#currentFuelVolume
}
get isStarted(){
    return this.#isStarted
}
get mileage(){
    return this.#mileage
}

start(){
    if(this.#isStarted){
        throw new Error('Машина уже заведена');
    } else {
        this.#isStarted = true;
    }
}

shutDownEngine(){
    if(this.#isStarted){
        this.#isStarted = false;
    }else{
        throw new Error('Машина ещё не заведена');
    }
}
fillUpGasTank(value){
    if(typeof value !== "number" || value <=0 || value == undefined || value == NaN)throw new Error('Неверное количество топлива для заправки');
    this.#currentFuelVolume = value + this.#currentFuelVolume;
    if( this.#currentFuelVolume > this.#maxFuelVolume)throw new Error('Топливный бак переполнен');
    return this.#currentFuelVolume;
}
drive(speed, hours){
    var distance = this.currentFuelVolume / this.fuelConsumption;
    
    if(typeof speed != "number" || speed<=0 || speed == undefined || speed == NaN) throw new Error('Неверная скорость');
    if(typeof hours != "number" || speed<=0 || hours == undefined || hours == NaN) throw new Error('Неверное количество часов');
    if(speed > this.#maxSpeed) throw new Error('Машина не может ехать так быстро');
    if(this.#isStarted == false) throw new Error('Машина должна быть заведена, чтобы ехать');
   

    
    if((speed * hours) < distance){
        this.#mileage = speed*hours;
        var fuelSize = this.#mileage * this.#fuelConsumption;
        this.#currentFuelVolume = this.#currentFuelVolume - fuelSize;
        return this.#mileage, this.#currentFuelVolume;
    }else 
    throw new Error('Недостаточно топлива');
    
}
}



