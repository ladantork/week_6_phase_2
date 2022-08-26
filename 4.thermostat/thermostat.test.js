const Thermostat =require('./thermostat');
describe ('Temperature', ()=>{
    it('return the 20 for temperature',()=>{
        const temp = new Thermostat();
        expect(temp.getTemperature()).toBe(20);
    });
    it('increase the temperature ',()=>{
        const temp = new Thermostat();
        temp.up()
        expect(temp.getTemperature()).toEqual(21);

    });
    it('decrease the temperature',()=>{
        const temp = new Thermostat();
        temp.down()
        expect(temp.getTemperature()).toEqual(19);

    });

   it ('decrease the temperature if it is above 10',()=>{
      const temp = new Thermostat();
    for (let i = 0 ; i < 11 ; i++) {
        temp.down();
      }
     expect(temp.getTemperature()).toEqual(10)

    });
    
  describe('setPowerSavingMode', () => {
    it('power set the Saving mode by default',()=>{
      const temp = new Thermostat();
      for(let i=0 ; i < 10 ; i++){
        temp.up()
      }
      expect(temp.getTemperature()).toEqual(25)
    });

    it('checking if the saving mood is on',()=>{
        const temp = new Thermostat();
        temp.setPowerSavingMode(true);
        expect(temp.savingMode).toBe(true);  

    });

    it('PSM is now on, max temperature is 25',()=>{
        const temp = new Thermostat();
        temp.setPowerSavingMode(true);
        for(let i=0 ; i < 20 ; i++){
            temp.up()
        }
        expect(temp.getTemperature()).toEqual(25);
    });
    
    it('PSM is now off, max temperature is 32',()=>{
        const temp = new Thermostat();
        temp.setPowerSavingMode(false);
        for(let i=0 ; i < 20 ; i++){
            temp.up()
        }
        expect(temp.getTemperature()).toEqual(32);

    });
  });
  describe('reset',()=>{
   it('should reset the temperature to 20',()=>{
    const temp = new Thermostat();
    temp.reset();
    expect(temp.getTemperature()).toEqual(20);
   });
  });

  describe ('thermostat current energy usage',()=>{
    it('low usage if it is below 18',()=>{
        const temp = new Thermostat();
        for(let i=0 ; i < 5; i++){
            temp.down()
        }
        expect(temp.getTemperature()).toBe(15);

    });

  });

  
});
    
