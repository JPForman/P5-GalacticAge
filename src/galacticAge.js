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
    return earthLeft;

  }
}
