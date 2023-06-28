const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth
canvas.height = innerHeight

let snow = [], lengthos = 100, size = 7, blue = 255, opp = 0

let colours = ['rgb(239, 71, 111)','rgb(255, 209, 102)','rgb(6, 214, 160)','rgb(17, 138, 178)']

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

class Particle {
    constructor(x,y,h,w){
        this.x = x
        this.y = y
        this.w = h
        this.h = w
        this.speed = (Math.random()* 3) + 1.5
        this.rgb = choose(colours)
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

    // for(let i = 0; i < 4; i++){
    //     new Particle(Math.floor(Math.random() * innerWidth),1, size, size, 255)
    // }

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

let mouse_down = false

document.addEventListener('mousedown', event => {
    mouse_down = true
    for(let i = 0; i < 5; i++){
        new Particle(event.clientX + (Math.random() * 30), event.clientY + (Math.random() * 30), 10, 10)
    }
})

document.addEventListener('mousemove', event => {
    if(mouse_down){
        for(let i = 0; i < 5; i++){
            new Particle(event.clientX + (Math.random() * 20), event.clientY + (Math.random() * 20), 10, 10)
        }

    }
})

document.addEventListener('mouseup', event => {
    mouse_down = false
})