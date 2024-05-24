let gamesqe=[]
let usersqe=[]
let maxscore=[]
let lvl=0
let startValue=true
let head=document.querySelector("h3")
let color=["NONE","green","red","yellow","blue"]
let user=document.querySelector(".con-of-box")

user.addEventListener("click",function(e){
  if(e.target.id=="green"||e.target.id=="red"||e.target.id=="yellow"||e.target.id=="blue"){
  if (startValue!=true){
    let audioElement = document.getElementById("clk")
    audioElement.play();
    let box=e.target
    let id=box.id
    usersqe.push(id)
    // console.log("USER="+usersqe)
    box.classList.add("userflash")
    setTimeout(()=>{box.classList.remove("userflash")},150)
    // if (JSON.stringify(gamesqe)===JSON.stringify(usersqe)){
    if (checkSequence()){
    if (usersqe.length===gamesqe.length){
          lvl++
          if (lvl>=5&&lvl<10) {
            head.innerHTML="LEVEl: "+lvl+"<br>WOW, Keep It Up 😁👍🔥"
          }
          else if (lvl>=7&&lvl<15) {
            head.innerHTML="LEVEl: "+lvl+"<br>Great, Your Memoery Skills Are Incredible! 😵👌"
          }
          else if (lvl>=10&&lvl<20) {
            head.innerHTML="LEVEl: "+lvl+"<br>Your Are Genius Person 🤯😵‍💫"
          }
          else if (lvl>=25) {
            let audioElement = document.getElementById("win")
            audioElement.play();
            head.innerHTML="LEVEl: "+lvl+"<br><span2>🎉🤡WIN The Game😎😍🎉</span2><br>Press Restart Button To Start The New Game"
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
          // audioElement.playbackRate = 1;
          audioElement.play();
          head.innerHTML=`<span>GAME OVER</span><br>Your Score Level is: ${lvl}<br><span>Press Restart Button To Play Again</span>`
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
let btn=document.querySelector(".btn")
btn.addEventListener("click",function(e){
  if (startValue==true) {
    startValue=false
    // if (e.key=="Enter") {
      let randomINDEX=Math.floor(Math.random()*4+1)
      let id=document.getElementById(color[randomINDEX])
      setTimeout(()=>{id.classList.add("gameflash")},500)
      setTimeout(()=>{ id.classList.remove("gameflash")},750)
      gamesqe.push(color[randomINDEX])
      lvl++
      head.innerText="LEVEl: "+lvl
    // }
  }
})
// main logic
function checkSequence() {
            for (let i = 0; i < usersqe.length; i++) {
                if (usersqe[i] !== gamesqe[i]) {
                    return false;
                }
            }
            return true;
        }