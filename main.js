let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
window.onscroll = function(){
     let value = scrollY;
     stars.style.left = value + 'px';
     moon.style.top = value *3 + 'px';
     mountains3.style.top = value *2+ 'px';
     mountains4.style.top = value *1.5+ 'px';
     river.style.top = value + 'px';
     boat6.style.top = value + 'px';
     boat6.style.left = value*3 + 'px';
   nouvil.style.fontSize = value  + 'px';
 if (scrolly >= 200){
      nouvil.style.fontSize= 200 + 'px';
      nouvil.style.position= 'Fixed';

    if (scrolly >= 478){ 
        nouvil.style.display = 'none';
    }else{
        nouvil.style.display = 'block';
    }
    if (scrollY >= 127){
          document.querySelector('.main').style.background ='linear-gradient(#376281,#10001f)'
          document.querySelector('.main').style.background ='linear-gradient(  rgb(147, 8, 160),rgb(7, 1, 20)'

    }
     }
     }
