import { Circle } from 'circle.js';

export class IncompleteCircle {
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
    /**
     *
     * Gets all quadrants present in the incomplete circle
     *
     */
     
    allQuadrants () {
        const startQuad = Circle.getQuadrant(this.start) || 1; // coerces 0 to 1st quadrant
        const endQuad = Circle.getQuadrant(this.end) || 1; // corces 0 to 1st quadrant
        let diff = Math.abs(startQuad - endQuad); // gets the number of quadrants between end and start
        if(diff){ // if difference is higher than zero, calculates interpolated quadrants
            let quadrants = [startQuad];
            let i = startQuad + 1;
            while(diff){
                quadrants.push(i % 4);
                diff--;
                i++;
            }
            quadrants.push(endQuad);
            return quadrants;
        }else{ // else return initial and ending quadrants
            return [startQuad, endQuad];
        }
    }
}
