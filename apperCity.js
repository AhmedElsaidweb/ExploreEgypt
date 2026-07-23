let container1 = document.getElementById('container1'); 
  let container2 = document.getElementById('container2'); 
  let container3 = document.getElementById('container3'); 
  let container4 = document.getElementById('container4'); 
  let container5 = document.getElementById('container5'); 
  let container6 = document.getElementById('container6'); 
  let container7 = document.getElementById('container7'); 

  let cairo = document.getElementById('cairo');
  let Alex = document.getElementById('Alex');
  let redsea = document.getElementById('redsea');
  let Giza = document.getElementById('Giza');
  let fayom = document.getElementById('fayom');
  let Axour = document.getElementById('Axour');
  let Aswan = document.getElementById('Aswan');
  
  cairo.onclick = function (){
   document.body.style.backgroundImage='url(img/tower2.jpeg)' 
  
   container1.style.display='block'
   container2.style.display='none'
   container3.style.display='none'
   container4.style.display='none'
   container5.style.display='none'
   container6.style.display='none'
   container7.style.display='none'
   
  }


   Alex.onclick = function (){

   document.body.style.backgroundImage='url(img/castel.jpeg)'
   container2.style.display='block';
   container1.style.display='none';
   container3.style.display='none';
   container4.style.display='none';
   container5.style.display='none';
   container6.style.display='none';
   container7.style.display='none';
  }

  redsea.onclick = function (){

    document.body.style.backgroundImage='url(img/beach.jpeg)'
   container3.style.display='block'
   container1.style.display='none' ;
   container2.style.display='none' 
   container4.style.display='none';
   container5.style.display='none';
   container6.style.display='none';
   container7.style.display='none';

  }

  Giza.onclick = function (){

    document.body.style.backgroundImage='url(img/pyramids.jpeg)'
   container4.style.display='block';
   container1.style.display='none' ;
   container2.style.display='none' 
   container3.style.display='none';
   container5.style.display='none';
   container6.style.display='none';
   container7.style.display='none';

  }


   fayom.onclick = function (){

    document.body.style.backgroundImage='url(img/hetan.jpeg)'
   container5.style.display='block';
   container1.style.display='none' ;
   container2.style.display='none' 
   container3.style.display='none';
   container4.style.display='none';
   container6.style.display='none';
   container7.style.display='none';

  }


  Aswan.onclick = function (){

    document.body.style.backgroundImage='url(img/ramses.jpeg)'
   container6.style.display='block';
   container1.style.display='none' ;
   container2.style.display='none' 
   container3.style.display='none';
   container4.style.display='none';
   container5.style.display='none';
   container7.style.display='none';

  }


   Axour.onclick = function (){

    document.body.style.backgroundImage='url(img/axor.jpeg)'
   container7.style.display='block';
   container1.style.display='none' ;
   container2.style.display='none' 
   container3.style.display='none';
   container4.style.display='none';
   container5.style.display='none';
   container6.style.display='none';

  }


  let input = document.querySelectorAll('input');
  let pragraf = document.getElementById('pragraf');
  let check = true;

  for(let n =0;n<input.length;n++){
    input[n].onclick=function(){
     let p =this.previousElementSibling;  

     if(check == true){
      p.style.height ="auto";
      this.value = "عرض أقل"
      check = false;
    } 
  
     else{
         p.style.height ="300px";
         this.value = "عرض المزيد"
         check = true;
      }    
   }

   let btnexit = document.getElementById('exit');
   let ul = document.getElementById('ul');
   let mainPage = document.getElementById('mainPage');
   let btn = document.getElementById('btn');



   btn.addEventListener('click',function(){
    ul.style.display = 'flex';
    btnexit.style.display = 'block';
    mainPage.style.display = 'flex'
   })

  
   btnexit.addEventListener('click',function(){
    ul.style.display = 'none';
   
    
    


   }) 
  }