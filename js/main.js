let userChoice;
let compChoice= Math.floor(Math.random()*3);

document.querySelector('.main__choice-rock').addEventListener("click",()=>{
  userChoice=0;
})
document.querySelector('.main__choice-paper').addEventListener("click",()=>{
  userChoice=1;
})
document.querySelector('.main__choice-scissors').addEventListener("click",()=>{
  userChoice=2;
})


if(compChoice == userChoice)
{
  document.querySelector('.main__message').textContent="Draw";
}
else if(compChoice ==0 && userChoice ==1)
{
  document.querySelector('.main__message').textContent="User Wins";
}
else if(compChoice ==0 && userChoice ==2)
{
  document.querySelector('.main__message').textContent="Comp Wins";
}
else if(compChoice ==1 && userChoice ==0)
{
  document.querySelector('.main__message').textContent="Comp Wins";
}
else if(compChoice ==1 && userChoice ==2)
{
  document.querySelector('.main__message').textContent="User Wins";
}
else if(compChoice ==2 && userChoice ==0)
{
  document.querySelector('.main__message').textContent="User Wins";
}
else if(compChoice ==2 && userChoice ==1)
{
  document.querySelector('.main__message').textContent="Comp Wins";
}
else
{
  document.querySelector('.main__message').textContent="Invalid";
}
