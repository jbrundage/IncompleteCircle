import { Circle } from 'circle.js';

export class IncompleteCircle {
    constructor(start, end, radius){
        this.start = start;
        this.end = end;
        this.radius = radius;
        this.startX = radius * Math.cos(Circle.getRadians(start));
        this.startY = radius * Math.sin(Circle.getRadians(start));
        this.endX = radius * Math.cos(Circle.getRadians(end));
        this.endY = radius * Math.sin(Circle.getRadians(end));
        this.startQuad = Circle.getQuadrant(this.start);
        this.endQuad = Circle.getQuadrant(this.end);
    }
    
   /**
    *
    * Gets all quadrants present in the incomplete circle
    *
    */
    allQuadrants () {
        let quadrants = [this.startQuad];
        if(( Circle.getNatural(this.start) <= Circle.getNatural(this.end) ) && ( this.startQuad === this.endQuad )) return quadrants;
        let i = ( this.startQuad + 1 );
        while((i % 5) !== this.endQuad){
            if(i % 5 !== 0) quadrants.push(i % 5);
            i++;
        }
        quadrants.push(this.endQuad);
        return quadrants;
    }
    
    getDimensions () {
        if(this.start === this.end) return null;
        const quadrants = this.allQuadrants();
        const quadrantsMap = {};
        quadrants.forEach(quadrant=>quadrantsMap[quadrant]=1);
        const quantity = quadrants.length;
        if(quantity === 4){
            return [2 * this.radius, 2 * this.radius];
        }
        let minX = this.endX > this.startX ? this.startX : this.endX;
        let minY = this.endY > this.startY ? this.startY : this.endY;
        let maxX = this.endX < this.startX ? this.startX : this.endX;
        let maxY = this.endY < this.startY ? this.startY : this.endY;
        minX = this.radius < minX ? this.radius : minX;
        minY = this.radius < minY ? this.radius : minY;
        maxX = this.radius > maxX ? this.radius : maxX;
        maxY = this.radius > maxY ? this.radius : maxY;
        if(quadrantsMap[1] && quadrantsMap[2]) {
            if(this.startQuad === 3 || this.startQuad === 4 || this.endQuad === 3 || this.endQuad === 4){
                minY = 0;
            }
        }
        if(quadrantsMap[2] && quadrantsMap[3]) {
            if(this.startQuad === 1 || this.startQuad === 4 || this.endQuad === 1 || this.endQuad === 4){
                minX = 0;
            }
        }
        if(quadrantsMap[3] && quadrantsMap[4]) {
            if(this.startQuad === 1 || this.startQuad === 2 || this.endQuad === 1 || this.endQuad === 2){
                maxY = this.radius*2;
            }
        }
        if(quadrantsMap[1] && quadrantsMap[4]) {
            if(this.startQuad === 1 || this.startQuad === 2 || this.endQuad === 1 || this.endQuad === 2){
                maxX = this.radius*2;
            }
        }
        return [maxX - minX, maxY - minY];
    }
}
