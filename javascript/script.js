let answer="";
let buttons=document.querySelectorAll('.innerbuttons');
Array.from(buttons).forEach((number)=>
 {
  number.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '=')
    {
        answer=eval(answer);
        document.querySelector('input').value=answer;
    }
    if(e.target.innerHTML== 'C')
    {
        answer="";
        document.querySelector('input').value=answer;
    }
   else{ console.log(e.target);
        answer=answer+e.target.innerHTML;
        document.querySelector('input').value=answer; 
        }
 })
 })