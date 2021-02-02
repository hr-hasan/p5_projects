class Particle {
    constructor(posX, posY, vx, vy, counter, firedots) {
        this.position = createVector(posX, posY)
        this.velocity = createVector(vx, vy)
        this.accelaration = createVector()
        this.radius = 2
        this.fireworks = []
        this.firedots = firedots
        this.counter = counter
        this.opacity = 255
        this.col = color(random(200), random(100, 220), random(100))

    }
    show = () => {
        stroke(this.col, this.opacity)
        ellipse(this.position.x, this.position.y, this.radius, this.radius)
    }
    move = () => {

        this.velocity.add(this.accelaration)
        this.position.add(this.velocity)
    }
    applyForce = (gravity) => {
        this.accelaration.y = gravity
    }
    isExplosionTime = () => {
        if (this.velocity.y >= 0) { return true } else return false
    }
    fadeOut = () => {

        this.opacity -= 15
        if (this.opacity <= 0) {
            this.ended()
        }
    }
    ended = () => {
        fireworks[this.counter] = new Spread(random(0, width), height, 0, random(-10, -15), this.counter, this.firedots)
    }

}