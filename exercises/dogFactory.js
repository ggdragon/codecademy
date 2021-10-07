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
