let fireworks = []
const totalFirework = 10

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight)
    background(40)
    strokeWeight(2)
    for (let i = 0; i < totalFirework; i++) {
        fireworks.push(new Spread(random(0, width), height, 0, random(-10, -15), i))
    }
    // frameRate(10)
}

function draw() {
    // put drawing code here
    background(40, 30)
    fireworks.forEach(firework => {
        firework.show()
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