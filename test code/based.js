const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth
canvas.height = innerHeight

let snow = [], lengthos = 100, size = Math.floor(Math.random(15) * 100), blue = 255, opp = 0

class Particle {
    constructor(x,y,h,w,blueness){
        this.x = x
        this.y = y
        this.w = h
        this.h = w
        this.blueness = blueness
        this.opp = opp
        snow.push(this)
    }
    draw(){
        ctx.fillStyle = (`rgba(52,204,${this.blueness},${this.opp})`)
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h)
        ctx.fill()
        ctx.closePath();
    }
}


function main_loop(){
    size = Math.floor(Math.random(10) * 50)
    ctx.clearRect(0, 0,canvas.width, canvas.height)
    new Particle(Math.floor(Math.random() * innerWidth),1, size, size, 255)
    snow.forEach(e => {
        e.draw()
        e.y += 1.5
        if(e.y > canvas.height){
            let indexoe = snow.indexOf(e)
            // snow.splice(indexoe,1)
            if (indexoe > -1) { // only splice array when item is found
                snow.splice(indexoe, 1); // 2nd parameter means remove one item only
            }        
        }
        let percent = (e.y/canvas.height*100)
        e.blueness = percent/100*255
        e.opp = percent / 100
    });
    
    requestAnimationFrame(main_loop)
}
requestAnimationFrame(main_loop)

let mousedown

document.addEventListener('mousedown', e => {
    mousedown = true
})

document.addEventListener('mousemove', event => {
    if(mousedown){
        new Particle(event.clientX, event.clientY, 20, 20, 255)
    }
})

document.addEventListener('mouseup', e => {
    mousedown = false
})