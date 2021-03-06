let fireworks = []
    //number of fireworks going up
const totalFirework = 30
const totalDots = 30

function setup() {
    createCanvas(windowWidth, windowHeight)
    background(40)
    strokeWeight(2)
    for (let i = 0; i < totalFirework; i++) {
        fireworks.push(new Spread(random(0, width), height, 0, random(-10, -15), i, totalDots))
    }
    frameRate(25)
}

function draw() {
    // put drawing code here
    //opacity gives a nice after effect
    background(40, 20)


    fireworks.forEach(firework => {
        //Stop showing after explosion
        if (!firework.isExplosionTime()) {
            firework.show()
        }
        firework.move()
        firework.applyForce(.2)
        firework.explode()

    })
    fireworks.forEach(spread => {
        spread.fireworks.forEach(fire => {
            fire.show()
            fire.applyForce(.5)
            fire.move()
            fire.fadeOut()
        })
    })
}