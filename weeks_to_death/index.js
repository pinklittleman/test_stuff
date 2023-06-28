let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

let days = [], x = 6, y = 6, before, fill

let year = prompt("what year was your birthday")
let day = prompt("what day was your birthday")
let month = prompt("what month was your birthday")

let date = Math.floor((new Date() - new Date(year,day,month)) / (1000 * 60 * 60 * 24))

class Day {
    constructor(x,y,size){
        this.x = x
        this.y = y
        this.size = size
        this.before = before
        if(days.length < date){
            this.fill = "rgb(255,60,60)"
        }
        else{
            this.fill = "rgb(60,60,60)"
        }
        days.push(this)
    }
    draw(){
        // ctx.fillStyle = "rgb(25,25,25)"
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.size,this.size)
        ctx.fill()
        ctx.closePath()
    }
}

let stopNow = false

function drawing(){

}

function based_loop() {

    ctx.clearRect(0,0,canvas.width,canvas.height)

    days.forEach(d => {
        ctx.fillStyle = d.fill
        d.draw()
    });

    for(var i = 0; i < 365; i++){
        if(y <= canvas.height-8){
            new Day(x,y,5)
            x += 6
            if (x >= canvas.width-6) {
                y += 6
                x = 6
            }
        }
        else{
            ctx.fillStyle = "rgb(255,25,25)"
            ctx.font = "bold 20px Arial";
            ctx.shadowBlur = 2;
            ctx.shadowColor = "grey";
            let txt = `you are looking at ${days.length} days in total; the red squares represent the days you've been alive`
            let width2 = ctx.measureText(txt).width
            ctx.fillText(txt, canvas.width / 2 - width2/2, canvas.height / 2)
            ctx.shadowBlur = 0;
        }
    }
    
    setTimeout(() => {
        requestAnimationFrame(based_loop)
    }, 250);
}

requestAnimationFrame(based_loop)