/* Write a function, dogFactory(). It should:
  - have 3 parameters: name, breed, and weight (in that order) 
  - expect name and breed to be strings 
  - expect weight to be a number 
  - return an object 
  - have each of those parameters as keys on the returned object 
  - returned with the values of the arguments that were passed in */


function dogFactory(name, breed, weight) {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(NewName) {
      this._name = NewName;
    },
    get breed() {
      return this._breed;
    },
    set breed(NewBreed) {
      this._breed = NewBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(NewWeight) {
      this._weight = NewWeight;
    },
    bark() {
      return 'ruff! ruff!'
    },
    eatTooManyTreats() {
      this._weight ++;
    },
  }
}
