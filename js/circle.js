"use strict";

// create a circle object
var circle = {
    radius: 3,

    getArea: function () {
        return Math.PI * Math.pow(circle.radius, 2);
    },

    logInfo: function (doRounding) {
        // TODO: complete this method.
        let area = this.getArea()
        if (doRounding) {
            //if doRounding is true, round the result to the nearest integer
            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        } else {
            // Otherwise, output the complete value
            console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea());
        }
    }
};

// log info about the circle
console.log("Raw circle information");
circle.logInfo(false);
console.log("Circle information rounded to the nearest whole number");
circle.logInfo(true);

console.log("=======================================================");
// TODO: Change the radius of the circle to 5.

circle.radius = 5;

// log info about the circle
console.log("Raw circle information");
circle.logInfo(false);
console.log("Circle information rounded to the nearest whole number");
circle.logInfo(true);

