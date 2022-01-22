'use strict';

const colors=['goldenrod','darkorange','orangered','red','crimson']
const times=Array.from(document.getElementsByTagName('h2'))
let current=0

times.forEach(time=>{
  time.style.color=colors[current]
  document.body.style.backgroundColor=colors[current]
 
  
})
const countDown=function(){

  let next=2023
const currentDate=new Date()
let newYear=new Date(next,0,1)
if(newYear-current===0){
  next++
newYear=new Date(next,0,1)
}
const gap=newYear-currentDate

const second=1000;
const minute=second*60;
const hour=minute*60;
const day=hour*24;
const month=day*30.42
document.querySelector('.month').textContent=Math.floor(gap/month)
document.querySelector('.day').textContent=Math.floor((gap%month)/day)
document.querySelector('.hour').textContent=Math.floor((gap%day)/hour)
document.querySelector('.minute').textContent=Math.floor((gap%hour)/minute)
document.querySelector('.second').textContent=Math.floor((gap%minute)/second)

if(document.querySelector('.second').textContent=='59'){
  current++
   if(current>times.length-1)current=0
  times.forEach(time=>{
  time.style.color=colors[current]
  document.body.style.backgroundColor=colors[current]
 
})
}

}

countDown()
setInterval(countDown,1000)