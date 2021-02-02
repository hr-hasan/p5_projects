class Spread extends Particle {
    super() {
        this.exploded = false

    }
    explode = () => {
        if (this.isExplosionTime()) {
            if (!this.exploded) {

                // console.log(`Exploded number ${this.counter}`)
                for (let i = 0; i < this.firedots; i++) {

                    this.fireworks.push(new Firework(this.position.x, this.position.y, random(-10, 10), random(-10, 10), this.counter))
                }
                // fireworks[this.counter] = (new Spread(random(0, width), height, 0, random(-10, -15), this.counter))
                // console.log(this.fireworks)
                this.exploded = true
            }

        }
    }
}