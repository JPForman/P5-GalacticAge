//GalacticAge Class with associated methods
export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = .24*earthAge;
    this.venusAge = .62*earthAge;
  }
}
