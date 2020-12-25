const text=["If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.",
            "For those writers who have writers' block, this can be an excellent way to take a step to crumbling those walls. By taking the writer away from the subject matter that is causing the block, a random sentence may allow them to see the project they're working on in a different light and perspective. Sometimes all it takes is to get that first sentence down to help break the block.",
            "Random sentences can also spur creativity in other types of projects being done. If you are trying to come up with a new concept, a new idea or a new product, a random sentence may help you find unique qualities you may not have considered. Trying to incorporate the sentence into your project can help you look at it in different and unexpected ways than you would normally on your own."];
const msg=document.getElementById("msg");
const typewords=document.getElementById("textar");
const btn=document.getElementById("Btn");
let starttime,endtime;
btn.addEventListener('click',function(){
    if(this.innerText=='Start'){
        typewords.disabled=false;
        playGame();
    }else if(this.innerText=='Done'){
        typewords.disabled=true;
        btn.innerText='Start';
        endPlay();
    }
});
const playGame=()=>{
    let randomNumber=Math.floor(Math.random()*text.length);    //Here we take random number from aray using loor function 
    msg.innerText=text[randomNumber];
    let date=new Date();
    starttime=date.getTime();
    btn.innerText="Done";
}   
const endPlay= ()=>{
    let date=new Date();
    endtime=date.getTime();
    let totalTime=((endtime-starttime)/1000);
    let totalStr=typewords.value;
    let wordCount=wordCounter(totalStr);
    let speed=Math.round((wordCount/totalTime)* 60);
    let finalMsg="You Typed total at"+" " +speed+" "+"words per minute";
    finalMsg +=compareWords(msg.innerText,totalStr);
    msg.innerText=finalMsg;
} 
const wordCounter=(str)=>{
    let response=str.split(" ").length;
    console.log(response);
    return response;
}
const compareWords= (str1,str2) =>{
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let cnt=0;
    words1.forEach((item,index) => {
        if(item==words2[index]){
            cnt++;
        } 
    });
    let errorwords=(words1.length-cnt);
    return (+" "+ cnt + "correct out of" + words1.length + "words and the total number of error are" + errorwords + ".");
}