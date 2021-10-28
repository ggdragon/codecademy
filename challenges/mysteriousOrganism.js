/*  Project Goals
    Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean 
    near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only 
    comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal 
    vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and 
    locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate 
    the DNA of P. aequor for your research team to study.

    As you progress through the steps, use the terminal and console.log() statements to check the output of your 
    loops and functions. */

    // Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

/* Since you need to create multiple objects, create a factory function pAequorFactory() that has two parameters:
  - The first parameter is a number (no two organisms should have the same number).
  - The second parameter is an array of 15 DNA bases.
  pAequorFactory() should return an object that contains the properties specimenNum and dna that correspond to the 
  parameters provided. */

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {  // mutate() will randomly select a base in the object’s dna property and change it to a different base.
      let randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg) {  // compareDNA() prints a message that states the percentage of DNA the two objects have in common
      let sharedDNA = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1;
        } else {
          return acc;
        }
        }, 0);
      let percentDNAShared = (sharedDNA / this.dna.length) * 100;
      let percentDNASHared = percentDNAShared.toFixed(2); // round to 2 decimal points  
    },
    willLikelySurvive() {  // return survival status if 60% of DNA is C or G bases
      let survival = this.dna.filter(base => base === "C" || base == "G");
      return survival.length / this.dna.length >=0.6;
    },
  }
}

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen);
