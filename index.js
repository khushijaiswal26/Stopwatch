var isStop = false;
let s=0;
let min=0;
let hr=0;
let time=document.getElementById("swTimer");

function start(){
    if(isStop == false){

        isStop = false;
        timer();
    }
}
function timer(){
    if(isStop == false){
        s=parseInt(s);
        min=parseInt(min);
        hr=parseInt(hr);

        s++;
        if(s == 60){
            s=0;
            min++;
        }
        if(min == 60){
            min=0;
            hr++;
        }
        if(s<10){
            s= "0" +s;
        }
        if(min<10){
            min = "0" +min;
        }
        if( hr<10 ){
            hr= "0" +hr;
        }
        
        time.innerHTML = hr+" : "+min+" : "+s;
        setTimeout("timer()",1000);
    }
   
}
function stop(){
    isStop = true;
}
function reset(){
    isStop = true;
    s=0;
    min=0;
    hr=0;
    
    time.innerHTML = "00 : 00 : 00";
}