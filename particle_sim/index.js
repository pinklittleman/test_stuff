const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth
canvas.height = innerHeight

let snow = [], lengthos = 100, size = 10, blue = 255, opp = 0

class Particle {
    constructor(x,y,h,w){
        this.x = x
        this.y = y
        this.w = h
        this.h = w
        this.opp = opp
        this.speed = (Math.random()* 25)
        this.rgb = `rgb(${(Math.random() * 255)},${(Math.random() * 255)},${(Math.random() * 255)})`
        snow.push(this)
    }
    draw(){
        ctx.fillStyle = this.rgb
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fill()
        ctx.closePath();
    }
}


function main_loop(){
    ctx.clearRect(0, 0,canvas.width, canvas.height)

    for(let i = 0; i < 2; i++){
        new Particle(Math.floor(Math.random() * innerWidth),1, size, size, 255)
    }

    snow.forEach(e => {
        ctx.fillStyle = e.rgb
        e.draw()
        e.y += e.speed
        if(e.y > canvas.height){
            let indexoe = snow.indexOf(e)
            // snow.splice(indexoe,1)
            if (indexoe > -1) { // only splice array when item is found
                snow.splice(indexoe, 1); // 2nd parameter means remove one item only
            }        
        }
    });
    
    requestAnimationFrame(main_loop)
}

requestAnimationFrame(main_loop)