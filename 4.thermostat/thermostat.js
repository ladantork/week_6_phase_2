class Thermostat{
    constructor(){
      this.temperature = 20;
    this.savingMode = true;
    }
    getTemperature(){
        return this.temperature;
    }
    up(){
        if (this.temperature >= 25 && this.savingMode === true){
            return this.temperature=25;
        }
        else if(this.temperature === 32){
            return this.temperature = 32;
        }
        else{
            return this.temperature += 1;
        }  
    }

    down(){
        if(this.temperature > 10){
        return this.temperature -= 1;
        }
    }
    setPowerSavingMode(savingMode){
        if(savingMode === true){
            return this.savingMode = true;
        }
        else if(savingMode === false){
            return this.savingMode = false;
        }
    }

    reset(){
        this.temperature = 20;
    }

    currentUsage(){
        if (this.temperature < 18) {
            return "low-usage"
        // } else if (this.temperature <= 25) {
        //     return "medium-usage"
        // } else if (this.temperature > 26) {
        //     return "high-usage"
         }
    }
}
const temp = new Thermostat();

console.log(temp.getTemperature()); // should return 20
console.log(temp.up());
console.log(temp.up());
console.log(temp.getTemperature()); // should now return 22
console.log(temp.down());
console.log(temp.getTemperature()); // should now return 21
 console.log(temp.setPowerSavingMode(true)); // PSM is now on, max temperature is 25

 for (let i = 0 ; i < 10 ; i++) {
    temp.up();
 }

 //console.log(temp.getTemperature()); // should be 25 (max reached)
 //onsole.log(temp.setPowerSavingMode(false)); // PSM is now off, max temperature is no more 25
// console.log(temp.up());
// console.log(temp.getTemperature()); // should now return 26
// console.log(temp.reset());
// console.log(temp.getTemperature()); // should be back to 20


module.exports = Thermostat;