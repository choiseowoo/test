var canvas = documenet.getElementById
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth = 100;
canvas.height = window.innerHeight = 100;

//공룡그림
var img2 = new Image();
img2.src = 'dinosaur.png';

var dino{
  x : 10,
  y : 200,
  width : 50,
  height : 50,
    draw(){
      ctx.fillStyle = 'green';
      ctx.fillRect(this.x , this.y , this.width , this.height);
      ctx.drawImage(img2. this.x, this.y)
  }
}

//장애물그림
var img1 = new Image();
img1.src = 'cactus.png';
 

class Cactus{
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1, this.x, this.y)
  }
}

var timer = 0;
var cactusArray = [];
var jumptimer = 0;
var animation;

function frameanimate(){
  animation = requestAnimationFram(frameanimate)
  timer++;
  
  //캐릭터 이동시 잔상 삭제
  ctx.clearReat(0,0 canvas.width, canvas.height)
  
  if(timer % 200 === 0){
   var cactus = new Cactus();
   cactusArray.push(cactus); 
 }
  
  cactusArray.forEach((a, i, o)=>{
    //x좌표가 0미만이면 제거
    if(a.x < 0){
      o.splice(i, 1)
    }
    a.x--;    
    
    collision(dino, a);
    
    a.draw();
  })
  
  //점프기능
  if(jump == true){
    //점프 조건
    dino.y--;
    jumptimer++;
  }
  if(jump == false){
    if(dino.y > 200){
    dino.y++; 
    }
  }
  if(jumptimer > 100){
    jump = false;
    jumptime = 0
  }

  dino.draw()
  //캐릭 이동 확인
  //dino.x++;
}

frameanimate();

//충돌확인
function collision(dino, cactus){
  var xcheck = cactus.x - (dino.x + dino.width);
  var ycheck = cactus.y - (dino.y + dino.height);
  if(xcheck < 0 && ycheck <0){
      ctx.clearRect(0,0 canvas.width, canvas.height);
      cancelAnimationFrame(animation)
     }
}


var jump = false;
document.addEventListener('keydown', function(e){
  if(e.code === 'space'){
    jump = true;
  }
})

