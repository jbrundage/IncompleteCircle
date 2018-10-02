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
        const startQuad = Circle.getQuadrant(this.start);
        const endQuad = Circle.getQuadrant(this.end);
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
        const quantity = quadrants.length;
        const start = quadrants[0];
        const radius = this.radius;
        if(quantity === 1){
            
        }
        if(quantity === 2){
        }
        if(quantity === 3){
        }
        if(quantity === 4){
            const firstAngle = Circle.getRadians(this.start);
            const lastAngle = Circle.getRadians(this.end);
            if(start === 1){
                const wing = Math.max(Math.cos(firstAngle), Math.cos(lastAngle));
                return [radius * ( 1 + wing ), 2 * radius];
            }
            if(start === 2){
                const wing = Math.max(Math.sin(firstAngle), Math.sin(lastAngle));
                return [2 * radius, radius * ( 1 + wing )];
            }
            if(start === 3){
                const wing = Math.max(Math.abs(Math.cos(firstAngle)), Math.cos(Math.sin(lastAngle)));
                return [radius * ( 1 + wing ), 2 * radius];
            }
            if(start === 4){
                const wing = Math.max(Math.abs(Math.sin(firstAngle)), Math.sin(Math.sin(lastAngle)));
                return [2 * radius, radius * ( 1 + wing )];
            }
        }
        if(quantity === 5){
            return [2 * radius, 2 * radius];
        }
    }
}
