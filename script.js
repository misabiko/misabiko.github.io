Physics({
    integrator: "verlet"
},
    function(world) {
    Physics.util.ticker.on(function(time) {
        world.step(time);
    })
});

Physics.util.ticker.start();

var ball = Physics.body("circle", {
    x: 50,
    y: 50,
    vx: 0.2,
    vy: 0.01,
    radius: 20
});

world.add(ball);

var gravity = Physics.behavior("constant-acceleration", {
    acc: {x: 0, y: 0.0004}
});

world.add(gravity);

var renderer = Physics.renderer("canvas", {
    el: "viewport",
    width: 500,
    height: 300,
    meta: false,
    styles: {
        "circle": {
            strokeStyle: "hsla(60, 37%, 17%, 1)",
            lineWidth: 1,
            fillStyle: "hsla(60, 37%, 57%, 0.8)",
            angleIndicator: "hsla(60, 37%, 17%, 0.4)"
        }
    }
});

world.add(renderer);
world.on("step", function(){
    world.render();
})
