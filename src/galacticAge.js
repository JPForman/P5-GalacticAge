
//GalacticAge Class with associated methods
export class GalacticAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = earthAge / .24;
    this.venusAge = earthAge / .62;
    this.marsAge = earthAge / 1.88;
    this.jupiterAge = earthAge / 11.86;
  }

  //Average lifespan estimated at 80yo earth time
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
    let mercuryLeft = Math.round((.24*80) - this.mercuryAge);
    if (mercuryLeft <= 0) {
      let mercuryNeg = (-1 * mercuryLeft);
      return "You outlived expectations by about " + mercuryNeg + " years";
    } else {
      return mercuryLeft;
    }
  }

  venusLeft (venusAge) {
    let venusLeft = Math.round((.62*80) - this.venusAge);
    if (venusLeft <= 0) {
      let venusNeg = (-1 * venusLeft);
      return "You outlived expectations by about " + venusNeg + " years";
    } else {
      return venusLeft;
    }
  }
  marsLeft (marsAge) {
    let marsLeft = Math.round((1.88*80) - this.marsAge);
    if (marsLeft <= 0) {
      let marsNeg = (-1 * marsLeft);
      return "You outlived expectations by about " + marsNeg + " years";
    } else {
      return marsLeft;
    }
  }
  jupiterLeft (jupiterAge) {
    let jupiterLeft = Math.round((11.86*80) - this.jupiterAge);
    if (jupiterLeft <= 0) {
      let jupiterNeg = (-1 * jupiterLeft);
      return "You outlived expectations by about " + jupiterNeg + " years";
    } else {
      return jupiterLeft;
    }
  }
}
