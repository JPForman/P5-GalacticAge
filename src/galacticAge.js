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

  mercuryLeft (earthAge) {
    let earthLeft = (.24*80) - this.earthAge;
      if (earthLeft <= 0)
      return `You outlived expectations by ${Math.abs(earthLeft)} years`;
      else {
        return earthLeft;
      }
  }
}
