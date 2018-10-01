export class Circle {
    static getNatural(angle){
      return (360 + (angle % 360)) % 360;
    }
    static getQuadrant(angle){
      return Math.ceil(Circle.getNatural(angle) / 90);
    }
}
