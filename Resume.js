let a = true;
function newpage(){
  window.open('https://media-exp1.licdn.com/dms/image/C4D03AQFudVVN1-apxQ/profile-displayphoto-shrink_100_100/0/1616874441918?e=1653523200&v=beta&t=XE5zN_t5AIZCI0vtfHZ_55xeNGLlTX_LxeGqguIQItM'); 
}
function Linkto(){
  window.open('https://www.linkedin.com/in/jit-saha-556737173/');
}
function showSkills(){
  if(a==true){
    a=false;
    document.getElementById('Skills').innerHTML = '<table cellpadding="1%" cellspacing="30"><tr><td>Domain</td><td>Proficiency</td></tr><tr><td>C</td><td>Intermediate</td></tr><tr><td>Java</td><td>Intermediate</td></tr></table>';
    document.getElementById('showbtn1').innerHTML = 'Click here to hide skills ▲';
  }
  else{
    a=true;
    document.getElementById('Skills').innerHTML = "";
    document.getElementById('showbtn1').innerHTML = 'Click here to show skills ▼';
  }
}
let b = true;
function showHobbies(){
  if(b==true){
    b=false;
    document.getElementById('hobbies').innerHTML = '<ul style="font-size: 1rem;"><li>Playing Chess</li><li>Reading Detective Stories</li></ul>';
    document.getElementById('showbtn2').innerHTML = 'Click here to hide interests ▲';
  }
  else{
    document.getElementById('hobbies').innerHTML = '';
    document.getElementById('showbtn2').innerHTML = 'Click here to show interests ▼';
    b=true;
  }
}
function marks1(){
  document.getElementById('marks1').innerHTML = 'XX%';
}
function marks2(){
  document.getElementById('marks2').innerHTML = 'XX%';
}
function marks3(){
  document.getElementById('marks3').innerHTML = 'XX%';
}
