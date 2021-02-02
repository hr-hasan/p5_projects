//class for explosion
class Firework extends Particle {
    super() {

    }

    show = () => {
        stroke(this.col, this.opacity)
        ellipse(this.position.x, this.position.y, this.radius, this.radius)
    }

}