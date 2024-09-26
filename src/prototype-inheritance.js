// https://medium.com/hackernoon/object-oriented-programming-in-vanilla-javascript-f3945b15f08a

function Vehicle(p1) {
    this._p1 = p1;
}

Vehicle.prototype.drive = function() {
     console.log('driving ' + this._p1);
  }

function Car(p1) {
   Vehicle.call(this, p1); 
}

// Car.prototype.constructor = Vehicle;
// Car.prototype = new Vehicle();

Car.prototype = Object.create( Vehicle.prototype );


var car = new Car('test');
car.drive(); // driving test
