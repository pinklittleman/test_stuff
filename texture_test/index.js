const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

let stuff = []
let indexoe

class square{
    constructor(x,y){
        this.x = x
        this.y = y
        this.size = 20
        stuff.push(this)
    }

    draw(){
        ctx.fillStyle = 'rgb(200,20,20)'
        ctx.fillRect(this.x, this.y, this.size, this.size)
    }
}
class circle{
    constructor(x,y){
        this.x = x
        this.y = y
        this.size = 20
        stuff.push(this)
    }

    draw(){
        ctx.fillStyle = 'rgb(20,20,200)'
        ctx.beginPath()
        ctx.arc(this.x,this.y, 15, 0, 2*Math.PI)
        ctx.fill()
    }
}

for (let i = 0; i < 500; i++) {
    new square(Math.floor(Math.random() * canvas.width),  Math.floor(Math.random() * 500))
    new circle(Math.floor(Math.random() * canvas.width),  Math.floor(Math.random() * 500)) 
}

function based(){
    
    ctx.clearRect(0,0,innerWidth,innerWidth)



    stuff.forEach(item => {
        item.draw()
        item.y++
        if(item.y > canvas.height){

            indexoe = stuff.indexOf(item)
            stuff.splice(indexoe, 1)
             
        }
    });    

    requestAnimationFrame(based)
}

requestAnimationFrame(based)