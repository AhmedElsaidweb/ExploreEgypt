  let select = document.querySelector('select');
     let section = document.querySelectorAll('section');
     let btn = document.getElementById('btn'); 
     btn.addEventListener('click',function(){
        for(let i = 0 ; i < section.length ; i++){
       let value = select.value;

       if(value == 'القاهرة'){
         section[0].style.display='block';
         section[1].style.display='none';
         section[2].style.display='none';
         section[3].style.display='none';
         section[4].style.display='none';
         section[5].style.display='none';
         section[6].style.display='none';
         

       }
       else if(value == 'الإسكندرية'){
         section[1].style.display='block';
         section[0].style.display='none';
         section[2].style.display='none';
         section[3].style.display='none';
         section[4].style.display='none';
         section[5].style.display='none';
         section[6].style.display='none';
         
       }
        else if(value == 'الجيزة'){
         section[2].style.display='block';
         section[0].style.display='none';
         section[1].style.display='none';
         section[3].style.display='none';
         section[4].style.display='none';
         section[5].style.display='none';
         section[6].style.display='none';
         
       }
        else if(value == 'البحر الأحمر'){
         section[3].style.display='block';
         section[0].style.display='none';
         section[1].style.display='none';
         section[2].style.display='none';
         section[4].style.display='none';
         section[5].style.display='none';
         section[6].style.display='none';
         
       }
        else if(value == 'الفيوم'){
         section[4].style.display='block';
         section[0].style.display='none';
         section[1].style.display='none';
         section[2].style.display='none';
         section[3].style.display='none';
         section[5].style.display='none';
         section[6].style.display='none';
         
       }
        else if(value == 'الأقصر'){
         section[5].style.display='block';
         section[0].style.display='none';
         section[1].style.display='none';
         section[2].style.display='none';
         section[3].style.display='none';
         section[4].style.display='none';
         section[6].style.display='none';
         
       }
        else {
         section[6].style.display='block';
         section[0].style.display='none';
         section[1].style.display='none';
         section[2].style.display='none';
         section[3].style.display='none';
         section[4].style.display='none';
         section[5].style.display='none';
         
       }
     }
     })  

     let button = document.getElementById('button');
     let check = true;
     button.addEventListener('click',function(){
     let p =  this.previousElementSibling;

     
     if(check == true){
      p.style.height ='auto';
      button.innerHTML='عرض أقل';
      check = false;
      }
      else{
      p.style.height ='300px';
      button.innerHTML='عرض المزيد';
      check = true;
      }
     })