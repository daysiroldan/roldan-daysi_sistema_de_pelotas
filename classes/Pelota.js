class Pelota {
    constructor() {
        this.posX = random(50, windowWidth - 50);
        this.posY = random(50, 70);
        this.velX = random(-2, 2);
        this.velY = random(-5, 5);
        this.acelY = 0.98;

        this.diam = int(random(10, 50));
        this.rad = this.diam / 2;
        this.colorin = color(200, random(100, 255), random(0, 150), random(100, 255));


        print('Hola, estoy vive!');
    }

    update(_piso) {
        if (this.posY + this.rad <= _piso) {
            this.velY += this.acelY;
            this.posY += this.velY;

        } else {
            this.velY *= -1;
            this.posY += this.velY;

        }
    }

    display() {
        fill(this.colorin);
        circle(this.posX, this.posY, this.diam);

    }

}