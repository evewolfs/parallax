

var input = {
    mouseX: {
        start: 0,
        end: window.innnerWidth,
        current: 0,
    },
    mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0,
    }
};


// track the mouse moving
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

var handleMouseMove = function (event) {
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
  
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    // if (input.mouseX.fraction >1) {
    //     input.mouseX.fraction = 1;
    
    // }
    // if (input.mouseX.fraction < 0) {
    //     input.mouseX.fraction = 0;
    // }
    console.log('fraction X', input.mouseX.fraction)
    console.log('fraction Y', input.mouseY.fraction)
}

var handleResize = function () {
    input.mouseX.end = window.innnerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innnerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
}


window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);