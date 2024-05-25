let gamesqe=[]
let usersqe=[]
let maxscore=[]
let lvl=0
let startValue=true
let head=document.querySelector("h4")
let color=["green","green","red","yellow","blue","blue"]
let user=document.querySelector(".con-of-box")
var second=0

// level increment after win
var a=4
var b=5
var c=8
var d=10
var f=12
let maxlvl=document.querySelector("#maxlvl")
maxlvl.innerHTML=`Reach to Max Lvl (${f})`
// *****
let btn=document.querySelector(".btn")
btn.addEventListener("click",function(e){
  if (startValue==true) {
    second=0
    startValue=false
      let randomINDEX=Math.floor(Math.random()*4+1)
      let id=document.getElementById(color[randomINDEX])
      setTimeout(()=>{id.classList.add("gameflash")},500)
      setTimeout(()=>{ id.classList.remove("gameflash")},750)
      gamesqe.push(color[randomINDEX])
      lvl++
      head.innerText="LEVEl: "+lvl
  }
})

// Sec Counter

  var T=setInterval(()=>{ 
    second++
    console.log(second);
    Check()
  },1000)

    // Check sec for conditions
    let Check=()=>{
      if(second>3&&lvl>4){
        let TMout = document.getElementById("TMout")
        TMout.play();
        head.innerHTML=`<span>Time Up</span><br>Your Score Level is: ${lvl}<br><span>Better Luck Next Time🤦‍♂️</span>`
        startValue=true
        maxscore.push(lvl)
          let max=Math.max(...maxscore)
          let btn=document.querySelector(".btn")
          btn.classList.remove("btn-success")
          btn.classList.add("btn-danger")
          btn.innerText="Restart"
          let con=document.querySelector(".con")
          let h2=document.querySelector("h2")
          h2.innerText="HIGH SCORE LVL IS: "+max
          con.append(h2)
          lvl=0
          gamesqe=[]
          usersqe=[]
      }
    }

// main logic
function checkSequence() {
  for (let i = 0; i < usersqe.length; i++) {
    if (usersqe[i] !== gamesqe[i]) {
      return false;
    }
  }
  return true; 
}
// main logic end

user.addEventListener("click",function(e){
  if(e.target.id=="green"||e.target.id=="red"||e.target.id=="yellow"||e.target.id=="blue"){
  if (startValue!=true){
    second=0
    let audioElement = document.getElementById("clk")
    audioElement.play();
    let box=e.target
    let id=box.id
    usersqe.push(id)
    // console.log("USER="+usersqe)
    box.classList.add("userflash")
    setTimeout(()=>{box.classList.remove("userflash")},150)
    if (checkSequence()){
    if (usersqe.length===gamesqe.length){
          lvl++
          if(lvl>a){
            let p=document.querySelector("p")
            p.innerHTML=`<b>AFTER LVL ${a}<br>3sec for Per Click<br>🤡</b>`
            p.style.color="rgb(0, 255, 30)"
            let btn=document.querySelector(".btn")
            btn.insertAdjacentElement("beforebegin",p)
          }
          if (lvl>=b&&lvl<c) {
            head.innerHTML="LEVEl: "+lvl+"<br>WOW, Keep It Up🔥👍"
          }
          else if(lvl>=c&&lvl<d){
            head.innerHTML="LEVEl: "+lvl+"<br>Great, Your Memoery Skills Are Incredible! 😵👌"
          }
          else if (lvl>=d&&lvl<f) {
            head.innerHTML="LEVEl: "+lvl+"<br>Your Are Genius Person 🤯😵‍💫"
          }
          else if (lvl>=12) {
            let audioElement = document.getElementById("win")
            audioElement.play();
            head.innerHTML="LEVEl: "+lvl+"<br><span2>🎉🤡WIN The Game😎😍🎉</span2><br>Press Start Button To Start The New Game"
            startValue=true
            maxscore.push(lvl)
            let max=Math.max(...maxscore)
            let con=document.querySelector(".con")
            let h2=document.querySelector("h2")
            h2.innerText="WIN SCORE LEVEL IS: "+max
            con.append(h2)
            let btn=document.querySelector(".btn")
            btn.classList.remove("btn-danger")
            btn.classList.add("btn-success")
            btn.innerText="Start New Game"
            lvl=0
            gamesqe=[]
            usersqe=[]
            a+=1
            b+=2
            c+=2
            d+=2
            f+=2
            maxlvl.innerHTML=`Reach to Max Lvl (${f})`
          }
          else{
            head.innerText="LEVEl: "+lvl
          }
          let randomINDEX=Math.floor(Math.random()*4+1)
          let id=document.getElementById(color[randomINDEX])
          setTimeout(()=>{id.classList.add("gameflash")},750)
          setTimeout(()=>{ id.classList.remove("gameflash")},1000)
          gamesqe.push(color[randomINDEX])
          // console.log("Game="+gamesqe)
          usersqe=[]
        }
      }
      else{
          let audioElement = document.getElementById("error")
          audioElement.play();
          head.innerHTML=`<span>GAME OVER💀</span><br>Your Score Level is: ${lvl}<br><span>Press Restart Button To Play Again</span>`
          startValue=true
          maxscore.push(lvl)
            let max=Math.max(...maxscore)
            let btn=document.querySelector(".btn")
            btn.classList.remove("btn-success")
            btn.classList.add("btn-danger")
            btn.innerText="Restart"
            let con=document.querySelector(".con")
            let h2=document.querySelector("h2")
            h2.innerText="HIGH SCORE LVL IS: "+max
            con.append(h2)
            lvl=0
            gamesqe=[]
            usersqe=[]
        }
    }
  }
})
// 