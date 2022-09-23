
var intervalID=0
function increment1H(){
    
    score=document.getElementById("home-el").innerText
    score*=1
    score+=1
    document.getElementById("home-el").innerText=score
}
function increment2H(){
    
    score=document.getElementById("home-el").innerText
    score*=1
    score+=2
    document.getElementById("home-el").innerText=score
}
function increment3H(){
    
    score=document.getElementById("home-el").innerText
    score*=1
    score+=3
    document.getElementById("home-el").innerText=score
}
function increment1G(){
    
    score=document.getElementById("guest-el").innerText
    score*=1
    score+=1
    document.getElementById("guest-el").innerText=score
}
function increment2G(){
    
    score=document.getElementById("guest-el").innerText
    score*=1
    score+=2
    document.getElementById("guest-el").innerText=score
}
function increment3G(){
    
    score=document.getElementById("guest-el").innerText
    score*=1
    score+=3
    document.getElementById("guest-el").innerText=score
}

function reset(){
    clearInterval(intervalID)
    
}

function timer(){
    let sec=parseInt(document.getElementById("seconds").textContent);
    let min=parseInt(document.getElementById("minutes").textContent);
    
    sec++
    if(sec==60)
    {
        sec=0
        min++
        if(min===90)
        {
            document.getElementById("minutes").textContent="Time's Up"
        }
        else{
            if(sec<10 && min <10)
            {
                document.getElementById("seconds").textContent='0'+sec
                document.getElementById("minutes").textContent='0'+min
            }
            else if(sec<10)
            {
                document.getElementById("seconds").textContent='0'+sec
                document.getElementById("minutes").textContent=min
            }
            else if(min<10)
            {
                document.getElementById("seconds").textContent=sec
                document.getElementById("minutes").textContent='0'+min
            }
            else
            {
                document.getElementById("seconds").textContent=sec
                document.getElementById("minutes").textContent=min
            }
            
        }
    }
    else{
        if(sec<10 && min <10)
            {
                document.getElementById("seconds").textContent='0'+sec
                document.getElementById("minutes").textContent='0'+min
            }
            else if(sec<10)
            {
                document.getElementById("seconds").textContent='0'+sec
                document.getElementById("minutes").textContent=min
            }
            else if(min<10)
            {
                document.getElementById("seconds").textContent=sec
                document.getElementById("minutes").textContent='0'+min
            }
            else
            {
                document.getElementById("seconds").textContent=sec
                document.getElementById("minutes").textContent=min
            }
            
    }
}

function timer22(){

    intervalID=setInterval(timer,1000);
}
