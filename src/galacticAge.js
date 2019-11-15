//GalacticAge Class with associated methods
export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = .24*earthAge;
  }

  mercuryAge(earthAge) {
    let mercuryAge = earthAge * .24;
    return mercuryAge;
  }


}
