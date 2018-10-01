import { Circle } from 'circle.js';

export class IncompleteCircle {
    constructor(start, end, radius){
        this.start = start;
        this.end = end;
        this.radius = radius;
    }
    
   /**
    *
    * Gets all quadrants present in the incomplete circle
    *
    */
    allQuadrants () {
        const startQuad = Circle.getQuadrant(this.start) || 1; // coerces 0 to 1st quadrant
        const endQuad = Circle.getQuadrant(this.end) || 1; // corces 0 to 1st quadrant
        let quadrants = [startQuad];
        if(( Circle.getNatural(this.start) <= Circle.getNatural(this.end) ) && ( startQuad === endQuad )) return quadrants;
        let i = ( startQuad + 1 );
        while((i % 5) !== endQuad){
            if(i % 5 !== 0) quadrants.push(i % 5);
            i++;
        }
        quadrants.push(endQuad);
        return quadrants;
    }
    
    getDimensions () {
        if(this.start === this.end) return null;
        const quadrants = this.allQuadrants();
        if(Math.abs(this.end - this.start) === 90){
            const originS = this.start % 90;
            const originE = this.end % 90;
            const untranslated = [this.radius * ( Math.cos(Circle.getRadians(originS)) + Math.cos(Circle.getRadians(OriginE))), this.radius];
            //incomplete
        }
    }
}
