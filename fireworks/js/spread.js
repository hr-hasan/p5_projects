//class for the flying part
class Spread extends Particle {
    super() {
        this.exploded = false

    }
    explode = () => {
        if (this.isExplosionTime()) {
            if (!this.exploded) {
                for (let i = 0; i < this.firedots; i++) {
                    this.fireworks.push(new Firework(this.position.x, this.position.y, random(-10, 10), random(-10, 10), this.counter, this.firedots))
                }
                this.exploded = true
            }

        }
    }
}