//GalacticAge Class with associated methods
export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = .24 * earthAge;
    this.venusAge = .62 * earthAge;
    this.marsAge = 1.88 * earthAge;
    this.jupiterAge = 11.86 * earthAge;
  }

  earthLeft (earthAge) {
    let earthLeft = 80 - this.earthAge;
    if (earthLeft <= 0) {
      let earthNeg = Math.abs(earthLeft);
      return "You outlived expectations by " + earthNeg + " years";
    } else {
      return earthLeft;
    }
  }

  mercuryLeft (mercuryAge) {
    // let mercuryLeft = (.24 * 80) - (this.mercuryAge);
    let mercuryLeft = Math.round(19.2 - this.mercuryAge);
    console.log(mercuryLeft);
    console.log(this.mercuryAge);
    console.log(19.2 - this.mercuryAge);
    if (mercuryLeft <= 0) {
      let mercuryNeg = (-1 * mercuryLeft);
      return "You outlived expectations by about " + mercuryNeg + " years";
    } else {
      return mercuryLeft;
    }
  }
}
