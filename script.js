// 'use strict'
const submit = document.querySelector('#form').addEventListener('submit', function(e){
    

e.preventDefault();

    

//  let email= this.email.value;;
//  let name =  this.name.value;




let message = '<b>Сообщение из телеграмм</b>\n';
   message+=`<b>вид работ:</b>${attributeValues1}\n`;
   message+=`<b>замерщик:</b>${attributeValues2}\n`;
   message+=`<b>расстояние:</b>${attributeValues3}\n`;
   message+=`<b>доставка:</b>${attributeValues4}`;


   console.log(message);
   let TOKEN='5791633342:AAEOD_eKDntfzgcOco4R0WbOB9jN-SMXGyY';
   let URI_API=`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
   let CHAT_Id= '-1001830250177';
  
// const errorM= document.querySelector('#error');
// const spiner = document.querySelector('#load');
// spiner.style.display = 'block';


axios.post(URI_API, {
    chat_id:CHAT_Id,
    parse_mode:'html',
    text:message
    
})
// .then((res)=>{
//   this.name.value='';
//   this.email.value='';
//   const alert = document.querySelector('#message');
//   spiner.style.display = 'none';
//   alert.style.display = 'block';
  
//   setTimeout(()=>{alert.style.display = 'none'},'5000')


// }).catch((error)=>{
//   errorM.style.display="block";
//   errorM.textContent =`собщение не отправленно!!!  код ошибки: ${error}`
//   spiner.style.display = 'none';
  
// })
})


// const mail = document.querySelector('#exampleInputEmail1').addEventListener('input', function(e){
  
//     let eMail = this.value;
//     if(!eMail.includes("@")){console.log('нет')}
//     console.log(eMail);
//  });


 /*================================================================================*/



 const nextQuestion = document.querySelector('.btn_quiz'),
  prevQuestion = document.querySelector('.btn_quiz_prev'),

 quiz_field = document.querySelector('.quiz_field'),
 done=document.querySelector('.done'),
 
 one = document.querySelector('one');
 
 
 
 const inputs = document.querySelectorAll('.radio_btn input');
   let attributeValues1 = [],
       attributeValues2 = [],
       attributeValues3 = [],
       attributeValues4 = [],
       attributeValues5 = [],
       attributeValues6 = [];
 
     inputs.forEach(element => {
     $(element).click(() => pushInputsDataToArray())
   })
 
 
   function pushInputsDataToArray() {
     

     
    
     inputs.forEach(element => {
       let input = $(element);
       
 
       if (input.is(":checked")) {
        switch(input.val())
        {
            case'Фасад':
            attributeValues1.push(input.val());
            break;
            case'Подшива':
            attributeValues1.push(input.val());
            break;
            case'Забор':
            attributeValues1.push(input.val());
            break;
            case'Стены и потолки':
            attributeValues1.push(input.val());
            break;
            case'Другое':
            attributeValues1.push(input.val());
            break;
            case'нужен замерщик':
            attributeValues2.push(input.val());
            break;
            case'без замерщика':
            attributeValues2.push(input.val());
            break;
            case'до 50 км.':
            attributeValues3.push(input.val());
            break;
            case'от 50 км. до 100 км.':
            attributeValues3.push(input.val());
            break;
            case'от 100 км. до 200 км.':
            attributeValues3.push(input.val());
            break;
            case'свыше 200 км.':
            attributeValues3.push(input.val());
            break;
            case'доставлять':
            attributeValues4.push(input.val());
            break;
            case'без доставки':
            attributeValues4.push(input.val());
            break;
        }
       }
     })
 
         var _token   = $("input[name=_token]").val();
         var product = $('#productId').val();
   }
 
   /****************************************************************************************/
   const imgQuiz = document.querySelectorAll('.img_quiz');
   
   imgQuiz.forEach(item=>{
    console.log(item);
       item.addEventListener('click', function(e){
        const target = e.currentTarget;
        console.log(target);
        if(target && target.classList.contains('img_quiz')){
          const done = document.createElement('div');
         
         done.classList.add('done');
         item.classList.add('active_img_quiz');


        
         item.append(done);
        }

        
         
       })
     
     
   })

   const twoQ = document.querySelectorAll('.check_one_quiz');
   
   twoQ.forEach(item=>{
    console.log(item);
    item.addEventListener('click', function(e){
      const target = e.currentTarget;
      console.log(target);
      if(target && target.classList.contains('check_one_quiz')){
        const doneT = document.createElement('div');
         
         doneT.classList.add('doneT');
         item.classList.add('active_two_quiz');


        
         item.append(doneT);
      }
    
         
       })
     
     
   })
 
 
 
 
 
   let card = 0;
   nextQuestion.addEventListener(('click'), ()=>{
     
     
     switch (card) {
       case 0:
         quiz_field.style.transform = "translateX(-900px)";
         card = 1;
         console.log(card)
         break;
       case 1:
         quiz_field.style.transform = "translateX(-1800px)";
         card = 2;
         console.log(card)

         break;
       case 2:
         quiz_field.style.transform = "translateX(-2700px)";
         card = 3;
         console.log(card)
         break;
       case 3:
         quiz_field.style.transform = "translateX(-3500px)";
         card = 4;
         break;
       
     }
 
   })
   prevQuestion.addEventListener(('click'), ()=>{
     
     
    switch (card) {
      case 1:
        quiz_field.style.transform = "translateX(0)";
        card = 0;
        console.log(card)
        break;
      case 2:
        quiz_field.style.transform = "translateX(-900px)";
        card = 1;
        break;
      case 3:
        quiz_field.style.transform = "translateX(-1800px)";
        card = 2;
        break;
      case 4:
        quiz_field.style.transform = "translateX(-2700px)";
        card = 3;
        break;
      
    }

  })













 /*================================================================================*/





