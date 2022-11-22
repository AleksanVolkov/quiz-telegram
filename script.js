'use strict'
const submit = document.querySelector('#form').addEventListener('submit', function(e){
    

e.preventDefault();


let email = this.email.value,
    name =  this.name.value;


let message = '<b>Сообщение из телеграмм</b>\n';
   message+=`<b>имя пользователя:</b>${name}\n`;
   message+=`<b>email пользователя:</b>${email}`;

   console.log(message);
   let TOKEN='5791633342:AAEOD_eKDntfzgcOco4R0WbOB9jN-SMXGyY';
   let URI_API=`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
   let CHAT_Id= '-1001830250177';
  
const errorM= document.querySelector('#error');
const spiner = document.querySelector('#load');
spiner.style.display = 'block';


axios.post(URI_API, {
    chat_id:CHAT_Id,
    parse_mode:'html',
    text:message
    
}).then((res)=>{
    this.name.value='';
    this.email.value='';
    const alert = document.querySelector('#message');
    spiner.style.display = 'none';
    alert.style.display = 'block';
    
    setTimeout(()=>{alert.style.display = 'none'},'5000')


}).catch((error)=>{
    errorM.style.display="block";
    errorM.textContent =`собщение не отправленно!!!  код ошибки: ${error}`
    spiner.style.display = 'none';
    
})




    










   






})

