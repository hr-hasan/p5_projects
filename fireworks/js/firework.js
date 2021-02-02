class Firework extends Particle {
    super() {

    }

    show = () => {
        stroke(random(255), random(255), random(255), this.opacity)
        ellipse(this.position.x, this.position.y, this.radius, this.radius)
    }

}